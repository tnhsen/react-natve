import { ScrollView,View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import ProductCard from '../components/ProductCard';
import styles from '../components/Styles';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Firebase';

export default function HomeScreen() {

  const [product, setProduct] = useState([]);
  const [tempData, setTempData] = useState([]);

  const getProduct = async () => {
    try {
      const querySnap = await getDocs(collection(db, "products"));
      let productsTemp = [];
      querySnap.forEach((doc) => {
        productsTemp.push({ id: doc.id, ...doc.data() }); 
      });
      setProduct(productsTemp);
      setTempData(productsTemp);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProduct(); 
  },[]);

  function filterItem(val) {
    if (val === 'All') {
      setProduct(tempData);
    } else if (val === 'IN STOCK') {
      setProduct(tempData.filter((item) => item.stock > 0));
    }
  }

  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.topView}>
        <TouchableOpacity style={styles.button} onPress={()=>filterItem('All')}>
          <Text style={styles.textButton}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>filterItem('INSTOCK')}>
          <Text style={styles.textButton}>IN STOCK</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.middleView}>
        <ScrollView style={styles.container}>
          {product.map((item) => (  
              <ProductCard key={item.id} id={item.id} name={item.name} price={item.price} stock={item.stock} pic={item.picture} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
