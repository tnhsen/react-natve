import React,{ useState,useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from "react-native"
import styles from "../components/Styles";
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth,db } from '../Firebase';
import { getDoc } from 'firebase/firestore';


export default function LoginScreen({navigation}){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [uid, setUid] = useState('');
    const [name, setName] = useState('');

    const UserLogin = async () =>{
        console.log('Login');
        signInWithEmailAndPassword(auth, email, password).then((userCrendential) => {
            const user = userCrendential.user;
            console.log(user.uid);
            alert("Login success!!");
            navigation.reset({index:0, routes:[{name: 'Home'}]});
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode + " " + errorMessage);
        })
    }

    useEffect(() => {
        async function CheckLogin() {
            onAuthStateChanged((user) => {
                if(user){
                    navigation.reset({index: 0, routes: [{name: 'Home'}]});
                }
            });
        }
        CheckLogin();
    },[]);

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