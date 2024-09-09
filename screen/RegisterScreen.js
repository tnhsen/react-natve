import React from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from "react-native"
import styles from "../components/Styles"

export default function RegisterScreen({navigation}){
    return (
    <SafeAreaView style={styles.LoginScreen}>
        <Text style={styles.TextLogin}>Register</Text>
        <TextInput style={styles.input} placeholder='E-mail' />
        <TextInput style={styles.input} placeholder='Password' />
        <TextInput style={styles.input} placeholder='Name' />
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Home')}><Text style={styles.textButton} >Register</Text></TouchableOpacity>
        <TouchableOpacity style={styles.loginButtonLV2} onPress={() => navigation.goBack()}><Text style={styles.textButtonLV2} >Back</Text></TouchableOpacity>
    </SafeAreaView>);
}