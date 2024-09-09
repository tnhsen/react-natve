import React from "react";
import { View, SafeAreaView, TouchableOpacity, Text, ScrollView } from "react-native";
import styles from "../components/Styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

export default function Cart(){

    const [list, setList] = useState([]);

    const getData = useCallback(async () => {
      try {
        const value = await AsyncStorage.getItem('item');
        if (value !== null) {
          setList(JSON.parse(value));
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
    
      async function removeValue(){
        try {
        await AsyncStorage.removeItem('item');
        alert('ตะกร้าสินค้าถูกลบแล้ว');
        getData();
        } catch(e) {
        // remove error
        alert('ไม่สามารถลบได้');
        }
      }

    return (
    <SafeAreaView style={styles.view}>
        <View style={styles.cartTop}>
            <TouchableOpacity style={styles.clearButton} onPress={()=>removeValue()}>
                <Text style={styles.textButton}>Clear</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.cartBottom}>
            <ScrollView style={styles.list}>
                {list.map((item, index) => (<Text style={styles.textList} key={index}>{item}</Text>))}
            </ScrollView>
        </View>
    </SafeAreaView>);
}