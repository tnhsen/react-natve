import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Keyboard } from "react-native"
import styles from "../components/Styles"
import { sendPasswordResetEmail } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth,db } from '../Firebase';

export default function ForgotScreen({navigation}){

    const [email, setEmail] = useState('');

    const forgeotPassword = () => {
        sendPasswordResetEmail(auth, email).then(() => {
            alert("Send some message to your email, Please check!!");
            Keyboard.dismiss();
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode + " " + errorMessage);
        })
    }
    return (
    <SafeAreaView style={styles.LoginScreen}>
        <Text style={styles.TextLogin}>Forget Password</Text>
        <TextInput style={styles.input} placeholder='E-mail' onChangeText={setEmail}/>
        <TouchableOpacity style={styles.loginButton}><Text style={styles.textButton} onPress={()=>forgeotPassword()}>Reset Password</Text></TouchableOpacity>
        <TouchableOpacity style={styles.loginButtonLV2} onPress={() => navigation.goBack()}><Text style={styles.textButtonLV2} >Back</Text></TouchableOpacity>
    </SafeAreaView>);
}