import { ScrollView,View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import ProductCard from './components/ProductCard';
import styles from './components/Styles';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  
  const [data, setData] = useState([]);
  const [tempdata, setTempdata] = useState();
  const [offset, setOffset] = useState(1);
  const [isListEnd, setIsListEnd] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchData() {
    const result = await fetch(
    'http://it2.sut.ac.th/labexample/product.php?pageno=' + offset
    );
    const json = await result.json();
    if(json.products.length > 0){
      setOffset(offset + 1);
      setData([...data, ...json.products]);
      setTempdata([...data, ...json.products]);
    }else{
      setIsListEnd(true);
    }
    }
    fetchData(); }, [data]);

  

  function filterItem(val){
    if(val === 'All'){
      setData(tempdata);
    }else if(val === 'INSTOCK'){
      setData(tempdata.filter((item)=> item.stock > 0))
    }
  }

 async function storeData(name){
    try{
      const res = await AsyncStorage.getItem('item');
      var proDuctList = [];
      if(res === undefined || res === null){
        proDuctList = [name];
      }else{
        proDuctList = JSON.parse(res);
        proDuctList.push(name);
      }
      await AsyncStorage.setItem('item', JSON.stringify(proDuctList));
      alert("บันทึกแล้ว " + name);
      getData();
    }catch(e){
      alert(e)
    }
  }

  async function getData(){
    try {
      const value = await AsyncStorage.getItem('item');
      if(value !== null){
        setList(JSON.parse(value));  
      }else{
        setList([]);
      }
    } catch(e) {
      alert(e);
    }
  }

  useEffect(() => {
    getData(); 
  }, []);

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
          {data.map((item => (<TouchableOpacity onPress={() => storeData(item.name)} key={item.id} ><ProductCard name={item.name} price={item.price} stock={item.stock} cate={item.cate} pic={item.pic} /></TouchableOpacity>)))}
        </ScrollView>
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.button} onPress={()=>removeValue()}>
          <Text style={styles.textButton}>Clear</Text>
        </TouchableOpacity>
        <ScrollView style={styles.list}>
          {list.map((item, index) => (<Text style={styles.textList} key={index}>{item}</Text>))}
        </ScrollView>
      </View>
    </SafeAreaView>
    
  );
}


//'http://it2.sut.ac.th/labexample/product.php'
//'http://it2.sut.ac.th/labexample/product.php?pageno=' + offset