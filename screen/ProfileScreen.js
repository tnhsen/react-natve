import React,{ useState } from "react";
import { Text, SafeAreaView, TouchableOpacity, Image } from "react-native";
import styles from "../components/Styles";
import Icon from 'react-native-vector-icons/Ionicons';
import { signOut } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth,db } from '../Firebase';


export default function Profile({navigation}){

    async function Logout() {
        await signOut(auth);
        navigation.reset({index: 0, routes: [{name: 'Login'}]});
    }

    return (
    <SafeAreaView style={styles.LoginScreen}>
        <Icon name="person" size={350} style={styles.profileImage} />
        <Text style={styles.username}>gay</Text>
        <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.textButton}>Change Profile Picture</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={() => Logout()}>
            <Text style={styles.textButton}>Logout</Text>
        </TouchableOpacity>
    </SafeAreaView>);
}