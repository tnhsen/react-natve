import React from "react";
import { Text, SafeAreaView, TouchableOpacity, Image } from "react-native";
import styles from "../components/Styles";
import Icon from 'react-native-vector-icons/Ionicons'

export default function Profile(){
    return (
    <SafeAreaView style={styles.LoginScreen}>
        <Icon name="person" size={350} style={styles.profileImage} />
        <Text style={styles.username}>Your name</Text>
        <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.textButton}>Change Profile Picture</Text>
        </TouchableOpacity>
    </SafeAreaView>);
}