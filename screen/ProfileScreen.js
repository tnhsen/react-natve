import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, TouchableOpacity, Image, View } from "react-native";
import styles from "../components/Styles";
import Icon from 'react-native-vector-icons/Ionicons';
import { signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../Firebase';
import * as ImagePicker from 'expo-image-picker';


export default function Profile({ navigation }) {

    const [username, setUsername] = useState('');
    const [picture, setPicture] = useState(null);

    async function Logout() {
        await signOut(auth);
        navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
    }

    useEffect(() => {
        const fetchUsername = async () => {
            try {
                const user = auth.currentUser;
                if (user) {
                    const userRef = doc(db, 'users', user.uid);
                    const docSnap = await getDoc(userRef);
                    if (docSnap.exists) {
                        setUsername(docSnap.data().name);
                    }
                }
            } catch (error) {
                console.error('error fetching username:', error);
            }
        }
        fetchUsername();
    }, []);

    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('permision required', 'Sorry we need media library permision to make this work');
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
            const imageUrl = result.assets[0].uri;
            setPicture(imageUrl);
        } else {
            alert('Selection cenceled')
        }
    }

    return (
        <SafeAreaView style={styles.LoginScreen}>
            <View style={styles.imageContainer}>
                {picture ? (
                    <Image key={picture} source={{ uri: picture }} style={styles.profileImage} />
                ) : (
                    <Icon name="person" size={350} style={styles.profileImage} />
                )}
            </View>
            <Text style={styles.username}>{username}</Text>
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.textButton} onPress={() => pickImage()}>Change Profile Picture</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton} onPress={() => Logout()}>
                <Text style={styles.textButton}>Logout</Text>
            </TouchableOpacity>
        </SafeAreaView>);
}