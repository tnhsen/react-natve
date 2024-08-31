import { ScrollView, View, StyleSheet } from 'react-native';
import ProductCard from './components/ProductCard';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <ProductCard name="Chocolate Cake" price="129" image="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg" />
        <ProductCard name="Cupcake" price="59" image="https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <ProductCard name="Birthday Cake" price="250" image="https://images.pexels.com/photos/2531546/pexels-photo-2531546.jpeg?auto=compress&cs=tinysrgb&w=400" />
        <ProductCard name="Pancake" price="150" image="https://images.pexels.com/photos/236804/pexels-photo-236804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff3e0',
  },
});
