import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import firebase from 'firebase';
import { List } from 'react-native-paper';
import { v4 as uuidv4 } from 'uuid';

export default function ShowData({ navigation }) {
    const [lists, setLists] = useState([{ selctedIndex: 0 }]);
    const [uid, setUid] = useState('');//user id state
    const [err, setErr] = useState([]);
    var db = firebase.firestore();
    var idNum = 1;


    useEffect(() => {
        // for (idNum >= 1000; idNum; idNum++) {
        //     idNum = idNum + 1;
        // }
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

    }, []);



    // const handleDelete = (user) => {
    //     let i = firebase.auth().currentUser.uid;
    //     firebase.firestore().collection("Bookmarks").doc(i).collection("music").doc(user).delete().then(() => {
    //         alert("Successfully Deleted!!")
    //     });
    // }
    <Text style={{ color: "white" }} onPress={() => handleDelete(items.mail)}>DELETE</Text>


    return (

        <View>

            {lists.map(items => {
                return (
                    <View key={uuidv4} style={styles.container}>
                        <Text >Title: {items.albumTite}</Text>
                        <Text >Artist: {items.artistName}</Text>
                        <Text >Album: {items.albumTite}</Text>
                        <Text >Release: {items.releaseDate}</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={{ color: "white" }} onPress={}>DELETE</Text>
                        </TouchableOpacity>
                    </View>
                )
            })}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: '1px',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
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
