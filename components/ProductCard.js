import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './Styles';

export default function ProductCard(props){
    return (
        <View style={styles.card}>
          <ScrollView >
            <Image style={styles.image} source={{ uri: props.pic }} />
            <Text style={styles.productName}>{props.name}</Text>
            <Text style={styles.descript}>จำนวนคงเหลือ {props.stock}</Text>
            <Text style={styles.price}>${props.price}</Text>
          </ScrollView>
        </View>
      );
}