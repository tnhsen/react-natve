import React from 'react';
import HomeScreen from './screen/Home';
import LoginScreen from './screen/LoginScreen';
import RegisterScreen from './screen/RegisterScreen';
import ForgotScreen from './screen/ForgotScreen';
import Cart from './screen/CartScreen';
import Profile from './screen/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home({Navigator}) {
  return (
  <Tab.Navigator tabBarOptions={{activeTintColor : 'red'}}>
    <Tab.Screen name="Home" options={{ headerShown: false, tabBarIcon:({color,size})=>(<Icon name="home" color={color} size={size} /> )}} component={HomeScreen} />
    <Tab.Screen name="Cart" options={{ headerShown: false, tabBarIcon:({color,size})=>(<Icon name="cart" color={color} size={size} /> )  }} component={Cart} />
    <Tab.Screen name="Profile" options={{ headerShown: false, tabBarIcon:({color,size})=>(<Icon name="person" color={color} size={size} /> ) }} component={Profile} />
  </Tab.Navigator>
  );
}
  
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
        <Stack.Screen name="Register" options={{ headerShown: false }} component={RegisterScreen} />
        <Stack.Screen name="Forget" options={{ headerShown: false }} component={ForgotScreen} />
        <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
