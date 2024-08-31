import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './Styles';

export default function ProductCard(props){
    return (
        <View style={styles.card}>
          <ScrollView >
            <Image
              source={{ uri: props.image }}
              style={styles.image}
            />
            <Text style={styles.productName}>{props.name}</Text>
            <Text style={styles.Price}>${props.price}</Text>
          </ScrollView>
        </View>
      );
}