import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import firebase from 'firebase';

const SignUp = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');

    

    const handleSignup = () => {
        
        firebase.auth().createUserWithEmailAndPassword(mail, pass)
        .then(() => {
            var db = firebase.firestore();
            db.collection("users").doc(firstName).set({
                firstName: firstName,
                lastName: lastName, })
            .then(() => {
                alert("signed up")
                {navigation.navigate('Login')}
            }).catch((error) => {
                console.error("Error adding document: ", error);
            });
        })
        
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} keyboardType={'default'} placeholder="First Name" onChangeText={(firstName) => setFirstName(firstName)} />
            <TextInput style={styles.input} keyboardType={'default'} placeholder="Last Name" onChangeText={(lastName) => setLastName(lastName)} />
            <TextInput style={styles.input} keyboardType={'email-address'} placeholder="Email" onChangeText={(mail) => setMail(mail)} />
            <TextInput style={styles.input} secureTextEntry placeholder="Password" onChangeText={(pass) => setPass(pass)} />
            <TouchableOpacity onPress={handleSignup}>
                <Text style={styles.button} >Sign In</Text>
            </TouchableOpacity>
            {error ? <Text>{error}</Text> : navigation.navigate('Home')}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 200,
    },

    input: {
        margin: 10,
        borderWidth: 1,
        height: 40,
        width: 250,
        borderRadius: 5,
        justifyContent: 'center',
        paddingLeft: 24
    },

    button: {
        margin: 10,
        borderWidth: 1,
        height: 40,
        width: 250,
        borderRadius: 5,
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        // paddingTop: 5,
        // paddingBottom: 5,
        paddingTop: 8,
        backgroundColor: '#170055',
        color: 'white'
    },
    textView: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row'
    },
    textLink: {
        color: '#3E00FF'
    },
    text: {
    }
});
export default SignUp
