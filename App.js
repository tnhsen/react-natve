import { ScrollView,View, Text, TouchableOpacity } from 'react-native';
import ProductCard from './components/ProductCard';
import styles from './components/Styles';
import { useState, useEffect } from 'react';

export default function App() {
  
  const [data, setData] = useState([]);
  const [tempdata, setTempdata] = useState();

  useEffect(() => {
    async function fetchData() {
    const result = await fetch(
    'https://fakestoreapi.com/products'
    );
    const json = await result.json();
    setData(json);
    setTempdata(json);
    }
    fetchData(); }, []);

  

  function filterItem(val){
    if(val === 'All'){
      setData(tempdata);
    }else if(val === 'INSTOCK'){
      setData(tempdata.filter((item)=> item.stock > 0))
    }
  }

  return (
    <View style={styles.view}>
      <TouchableOpacity style={styles.button} onPress={()=>filterItem('All')}>
        <Text style={styles.textButton}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>filterItem('INSTOCK')}>
        <Text style={styles.textButton}>IN STOCK</Text>
      </TouchableOpacity>
      <ScrollView style={styles.container}>
        {data.map((item => (<ProductCard key={item.id} name={item.title} price={item.price} stock="10" cate="gay" pic={item.image} />)))}
      </ScrollView>
    </View>
    
  );
}

//https://fakestoreapi.com/products
//{data.map((item => (<ProductCard key={item.id} name={item.title} price={item.price} stock="10" cate="gay" pic={item.image} />)))}

//https://it2.sut.ac.th/labexample/product.php
//https://it2.sut.ac.th/labexample/product.php?pageno=1
//{data.map((item => (<ProductCard key={item.id} name={item.name} price={item.price} stock={item.stock} cate={item.cate} pic={item.pic} />)))}