import React, { useState, useEffect, useCallback } from "react";
import { View, SafeAreaView, TouchableOpacity, Text, ScrollView } from "react-native";
import styles from "../components/Styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { collection, doc, getDocs, deleteDoc, getDoc } from 'firebase/firestore';
import { db, auth } from '../Firebase';

export default function Cart() {

  const [list, setList] = useState([]);
  const user = auth.currentUser;

  const getData = useCallback(async () => {
    try {

      if (user) {
        const docRef = doc(db, "users", user.uid);
        const cartRef = collection(docRef, "cart");
        const docSnap = await getDocs(cartRef);

        const cartItem = docSnap.docs.map(doc => ({
          id: doc.id, ...doc.data()
        }));
        setList(cartItem);
      } else {
        setList([]);
      }
    } catch (e) {
      alert(e);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [getData])
  );

  const OrderItem = async () => {
    try {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const cartRef = collection(docRef, "cart");
        const docSnap = await getDocs(cartRef);

        const deletetAll = docSnap.docs.map(async (docSnapDel) => {
          const docDelete = doc(db, "users", user.uid, "cart", docSnapDel.id);
          await deleteDoc(docDelete);
        });
        await Promise.all(deletetAll);
        alert("สั่งสินค้าเรียบร้อยแล้ว");
        getData();
      }
    } catch (e) {
      alert(e);
    }
  }

  const deleteItem = async (id) => {
    try {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const cartRef = collection(docRef, "cart");
        const docSnap = await getDocs(cartRef);

        const deleteSome = docSnap.docs.map(async (docSnapDel) => {
          const itemData = docSnapDel.data();
          const productID = itemData.id;

          //console.log(productID);
          if (productID === id) {
            const docDelete = doc(db, "users", user.uid, "cart", docSnapDel.id);
            await deleteDoc(docDelete);
          }


        });
        await Promise.all(deleteSome);
        alert("ลบสินค้าเรียบร้อยแล้ว");
        getData();
      }
    } catch (e) {
      alert(e);
    }
  }

  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.cartTop}>
        <TouchableOpacity style={styles.clearButton} onPress={() => OrderItem()}>
          <Text style={styles.textButton}>Clear</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cartBottom}>
        <ScrollView style={styles.list}>
          {list.map((item, index) => (<TouchableOpacity style={styles.cartItem} key={index} onPress={() => deleteItem(item.id)}><Text style={styles.textList} >{item.name} - ${item.price}</Text></TouchableOpacity>))}
        </ScrollView>
      </View>
    </SafeAreaView>);
}