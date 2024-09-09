import React from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from "react-native"
import styles from "../components/Styles"


export default function LoginScreen({navigation}){
    return (
    <SafeAreaView style={styles.LoginScreen}>
        <Text style={styles.TextLogin}>Login</Text>
        <TextInput style={styles.input} placeholder='E-mail' />
        <TextInput style={styles.input} placeholder='Password' />
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Home')}><Text style={styles.textButton} >Login</Text></TouchableOpacity>
        <TouchableOpacity style={styles.loginButtonLV2} onPress={() => navigation.navigate('Register')}><Text style={styles.textButtonLV2} >Register</Text></TouchableOpacity>
        <TouchableOpacity style={styles.loginButtonLV2} onPress={() => navigation.navigate('Forget')}><Text style={styles.textButtonLV2} >Forget Password</Text></TouchableOpacity>
    </SafeAreaView>);
}