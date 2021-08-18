import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import firebase from 'firebase';

const SignUp = ({ navigation }) => {
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');

    const signup = async () => {
        try {
            firebase.auth().createUserWithEmailAndPassword(mail, pass);
        }
        catch (err) {
            setError(err.message)
        }
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="First Name" />
            <TextInput style={styles.input} placeholder="Last Name" />
            <TextInput style={styles.input} keyboardType={'email-address'} placeholder="Email" />
            <TextInput style={styles.input} secureTextEntry placeholder="Password" />
            <TouchableOpacity onPress={() => signup}>
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
