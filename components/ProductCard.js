import React,{ useEffect, useState} from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './Styles';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../Firebase';

export default function ProductCard(props){

  const [cuser, setCuser] = useState(null);

  async function Order(id, name) {
    const docRef = await addDoc(collection(db, 'users', cuser.uid, 'cart'), {
      name: name,
      productid: id,
    });
  }

  useEffect(() => {
      async function CheckLogin() {
          onAuthStateChanged((user) => {
              if(user){
                  setCuser(user);
              }
          });
      }
      CheckLogin();
  },[]);

    return (
        <View style={styles.card}>
          <TouchableOpacity onPress={() => Order(props.id, props.name)}>
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