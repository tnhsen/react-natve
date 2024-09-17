import React,{ useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from "react-native"
import styles from "../components/Styles";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth,db } from '../Firebase';

export default function RegisterScreen({navigation}){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const RegisterUser = async () => {
        console.log("Register");
        createUserWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
            const user = userCredential.user;
            const uid = user.uid;
            console.log(uid);
            console.log(name);

            await setDoc(doc(db, "users", uid), {
                "name": name,
            });

            alert("Register Success!!");
            navigation.navigate('Home');
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("error " + errorMessage);
        })
    }

    return (
    <SafeAreaView style={styles.LoginScreen}>
        <Text style={styles.TextLogin}>Register</Text>
        <TextInput style={styles.input} placeholder='E-mail' onChangeText={setEmail} />
        <TextInput style={styles.input} placeholder='Password' onChangeText={setPassword} />
        <TextInput style={styles.input} placeholder='Name' onChangeText={setName} />
        <TouchableOpacity style={styles.loginButton} onPress={() => RegisterUser()}><Text style={styles.textButton} >Register</Text></TouchableOpacity>
        <TouchableOpacity style={styles.loginButtonLV2} onPress={() => navigation.goBack()}><Text style={styles.textButtonLV2} >Back</Text></TouchableOpacity>
    </SafeAreaView>);
}