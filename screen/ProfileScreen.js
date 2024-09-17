import React,{ useState } from "react";
import { Text, SafeAreaView, TouchableOpacity, Image } from "react-native";
import styles from "../components/Styles";
import Icon from 'react-native-vector-icons/Ionicons';
import { doc, getDoc } from 'firebase/firestore';
import { auth,db } from '../Firebase';

export default async function Profile(){

    const docRef = doc(db, "users", "name");
    const docSnap = await getDoc(docRef);
    const [name, setName] = useState('');

    if(docSnap.exists()){
        setName(docSnap.data().key);
    }else{
        console.log("No such document!");
    }
    return (
    <SafeAreaView style={styles.LoginScreen}>
        <Icon name="person" size={350} style={styles.profileImage} />
        <Text style={styles.username}>{name}</Text>
        <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.textButton}>Change Profile Picture</Text>
        </TouchableOpacity>
    </SafeAreaView>);
}