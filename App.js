import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
// import Home from './Pages/Home';

const Stack = createNativeStackNavigator();

export default function App({ navigation  }) {
  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
      </Stack.Navigator>
    </NavigationContainer>
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

