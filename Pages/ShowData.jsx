import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import firebase from 'firebase';

export default function ShowData({ navigation }) {
    const [lists, setLists] = useState([]);
    const [err, setErr] = useState([]);
    var db = firebase.firestore();




    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            firebase
                .firestore()
                .collection("data").doc(user.uid).collection("albums")
                .onSnapshot(snapshot => {
                    const lists = snapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data(),
                    }))
                    setLists(lists)

                    console.log(lists)
                })
        })




    }, [])

    return (

        <View>
            {lists.map(items => {
                return (<Text style={styles.text}>{items.albumTite}</Text>)
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 80,
    },

    input: {
        margin: 10,
        borderWidth: 1,
        maxHeight: 40,
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
        maxHeight: 40,
        width: 250,
        borderRadius: 5,
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        // paddingTop: 5,
        // paddingBottom: 5,
        paddingTop: 8,
        backgroundColor: '#170055',
        color: 'white',
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
        fontSize: 40,
    },
    date: {

    },
    radioGroup: {
        display: 'flex',
        flexDirection: 'row',
        borderColor: "balck",
        borderWidth: '1px',
        padding: '10px',
    },
    radioTitle: {
        fontWeight: 'bold',
        paddingBottom: 10,
    }
})
