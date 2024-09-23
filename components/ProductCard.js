import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './Styles';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, doc, } from 'firebase/firestore';
import { db,auth } from '../Firebase';

export default function ProductCard(props) {

  const user = auth.currentUser;

  const order = async () => {
    
    const product = { id: props.id, name: props.name, price: props.price };

    try {
      const docRef = doc(db, "users", user.uid);
      const cartRef = collection(docRef, "cart");
      await addDoc(cartRef, product);
      alert("Added!!");
    } catch (error) {
      alert(error);
    }
  }


  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => order(props.id, props.name)}>
        <ScrollView >
          <Image style={styles.image} source={{ uri: props.pic }} />
          <Text style={styles.productName}>{props.name}</Text>
          <Text style={styles.descript}>จำนวนคงเหลือ {props.stock}</Text>
          <Text style={styles.price}>${props.price}</Text>
        </ScrollView>
      </TouchableOpacity>
    </View>
  );
}