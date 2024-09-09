import React from "react";
import { Text, SafeAreaView, TouchableOpacity, Image } from "react-native";
import styles from "../components/Styles";

export default function Profile(){
    return (
    <SafeAreaView style={styles.LoginScreen}>
        <Image source={require('../img/daffyduck.png')} style={styles.profileImage} />
        <Text style={styles.username}>Your name</Text>
        <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.textButton}>Change Profile Picture</Text>
        </TouchableOpacity>
    </SafeAreaView>);
}