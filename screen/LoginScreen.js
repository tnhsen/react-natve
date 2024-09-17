import React,{ useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from "react-native"
import styles from "../components/Styles"


export default function LoginScreen({navigation}){



    return (
    <SafeAreaView style={styles.LoginScreen}>
        <Text style={styles.TextLogin}>Login</Text>
        <TextInput style={styles.input} placeholder='E-mail' onChangeText={setEmail} />
        <TextInput style={styles.input} placeholder='Password' onChangeText={setPassword} />
        <TouchableOpacity style={styles.loginButton} onPress={() => UserLogin()}><Text style={styles.textButton} >Login</Text></TouchableOpacity>
        <TouchableOpacity style={styles.loginButtonLV2} onPress={() => navigation.navigate('Register')}><Text style={styles.textButtonLV2} >Register</Text></TouchableOpacity>
        <TouchableOpacity style={styles.loginButtonLV2} onPress={() => navigation.navigate('Forget')}><Text style={styles.textButtonLV2} >Forget Password</Text></TouchableOpacity>
    </SafeAreaView>);
}