import React from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from "react-native"
import styles from "../components/Styles"

export default function ForgotScreen({navigation}){
    return (
    <SafeAreaView style={styles.LoginScreen}>
        <Text style={styles.TextLogin}>Forget Password</Text>
        <TextInput style={styles.input} placeholder='E-mail' />
        <TouchableOpacity style={styles.loginButton}><Text style={styles.textButton} >Reset Password</Text></TouchableOpacity>
        <TouchableOpacity style={styles.loginButtonLV2} onPress={() => navigation.goBack()}><Text style={styles.textButtonLV2} >Back</Text></TouchableOpacity>
    </SafeAreaView>);
}