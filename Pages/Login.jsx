import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { firebase } from './firebase/config'
// import Home from './Pages/Home';


const Login = ({ navigation }) => {

    const [getEmail, setEmail] = useState('');
    const [getPassword, setPassword] = useState('');

    const handleLogin = () => {
        firebase.auth().signInWithEmailAndPassword(getEmail, getPassword).then(() => {
            alert("it's working!!");
            {navigation.navigate('Home')}
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
              alert('Wrong password.');
            } else {
              alert(errorMessage);
            }
            console.log(error);
        })



    }
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value={getEmail} keyboardType={'email-address'} placeholder="Email" onChangeText={(getEmail) => setEmail(getEmail)} />
            <TextInput style={styles.input} value={getPassword} secureTextEntry placeholder="Password" onChangeText={(getPassword) => setPassword(getPassword)} />

            <TouchableOpacity>
                <Text style={styles.button} onPress={handleLogin}>Sign In</Text>
            </TouchableOpacity>

            <View style={styles.textView}>
                <Text style={styles.text}>Don't have an account?</Text>
                <TouchableOpacity >
                    <Text style={styles.textLink} onPress={() => navigation.navigate('SignUp')}> Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
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

export default Login
