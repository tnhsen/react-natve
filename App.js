import { ScrollView, View, StyleSheet } from 'react-native';
import ProductCard from './components/ProductCard';
import styles from './components/Styles';

export default function App() {
  
  const data =[
    {
      "id": "1",
      "name": "Pantene แพนทีน มิราเคิล คริสตัล สมูท แชมพู+ครีมนวดผม 500 มล.",
      "price": "599",
      "stock": "2",
      "cate": "ผลิตภัณฑ์ดูแลผม",
      "pic": "http://it2.sut.ac.th/labexample/pics/pantene.jpg"
      },
      {
      "id": "2",
      "name": "ลอรีอัล ปารีส เอลแซฟ เอ็กซ์ตรอว์ดินารี่ ออยล์ 100 มล. (Extraordinary, บำรุงผม, น้ำมันใส่ผม, เซรั่มบำ",
      "price": "259",
      "stock": "0",
      "cate": "ผลิตภัณฑ์ดูแลผม",
      "pic": "http://it2.sut.ac.th/labexample/pics/elseve.jpg"
      },
      {
      "id": "3",
      "name": "Microsoft Surface Pro 7 Laptop with Type Cover",
      "price": "38900",
      "stock": "5",
      "cate": "Computer",
      "pic": "http://it2.sut.ac.th/labexample/pics/surface.jpg"
      },
      {
      "id": "4",
      "name": "Desktop PC DELL Optiplex 3080SFF-SNS38SF001",
      "price": "14400",
      "stock": "3",
      "cate": "Computer",
      "pic": "http://it2.sut.ac.th/labexample/pics/dell.jpg"
      },
      {
      "id": "5",
      "name": "ซัมซุง ตู้เย็น 2 ประตู รุ่น RT20HAR1DSA/ST ขนาด 7.4 คิว",
      "price": "6990",
      "stock": "10",
      "cate": "เครื่องใช้ไฟฟ้า",
      "pic": "http://it2.sut.ac.th/labexample/pics/fridge.jpg"
      }
  ]

  return (
    
    <ScrollView style={styles.container}>
        {data.map((item => (<ProductCard key={item.id} name={item.name} price={item.price} stock={item.stock} cate={item.cate} pic={item.pic} />)))}
    </ScrollView>
  );
}
