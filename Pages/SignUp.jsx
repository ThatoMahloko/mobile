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
    const [confirmPass, setConfirmPass] = useState('');
    const [error, setError] = useState('');

    // if (pass === confirmPass) {
    //     alert('Passwords match');
    //     { navigation.navigate('Login') };            
    // } else {
    //     alert("Passwords don't match!!");
    //     // {navigation.navigate('SignUp')};
    // }
    var db = firebase.firestore();
    const handleSignup = () => {
        firebase.auth().createUserWithEmailAndPassword(mail, pass).then(() => {

            if (pass !== confirmPass) {
                alert("passwords don't match!");
            } else {
                db.collection("users").doc(firstName).set({ firstName: firstName, lastName: lastName, }).then(() => {
                    { navigation.navigate('Home') };
                    var selectedGroupID = document.getElementById('inputField');
                    selectedGroupID = '';
                });
            }

        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        })
    }


    return (
        <View style={styles.container}>
            <TextInput style={styles.input} id="inputField" keyboardType={'default'} placeholder="First Name" onChangeText={(firstName) => setFirstName(firstName)} required />
            <TextInput style={styles.input} id="inputField" keyboardType={'default'} placeholder="Last Name" onChangeText={(lastName) => setLastName(lastName)} />
            <TextInput style={styles.input} id="inputField" keyboardType={'email-address'} placeholder="Email" onChangeText={(mail) => setMail(mail)} />
            <TextInput style={styles.input} id="inputField" secureTextEntry placeholder="Password" onChangeText={(pass) => setPass(pass)} />
            <TextInput style={styles.input} id="inputField" secureTextEntry placeholder="Confirm Password" onChangeText={(confirmPass) => setConfirmPass(confirmPass)} />
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
