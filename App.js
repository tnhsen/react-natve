import { ScrollView,View, Text, TouchableOpacity } from 'react-native';
import ProductCard from './components/ProductCard';
import styles from './components/Styles';
import { useState, useEffect } from 'react';

export default function App() {
  
  const [data, setData] = useState([]);
  const [tempdata, setTempdata] = useState();
  const [offset, setOffset] = useState(1);
  const [isListEnd, setIsListEnd] = useState(false);

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

  return (
    <View style={styles.view}>
      <TouchableOpacity style={styles.button} onPress={()=>filterItem('All')}>
        <Text style={styles.textButton}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>filterItem('INSTOCK')}>
        <Text style={styles.textButton}>IN STOCK</Text>
      </TouchableOpacity>
      <ScrollView style={styles.container}>
        {data.map((item => (<ProductCard key={item.id} name={item.name} price={item.price} stock={item.stock} cate={item.cate} pic={item.pic} />)))}
      </ScrollView>
    </View>
    
  );
}


//'http://it2.sut.ac.th/labexample/product.php'
//'http://it2.sut.ac.th/labexample/product.php?pageno=' + offset