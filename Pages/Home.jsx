import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import firebase from 'firebase'
// import RadioForm
const Home = ({ navigation }) => {

    //this is the state for adding data    
    const [releaseDate, setReleaseDate] = useState('');//release date
    const [artistName, setArtistName] = useState('');//artist name  
    const [albumTite, setAlbumTitle] = useState('');//album title
    const [songTitle, setSongTitle] = useState('');//song title
    const [uid, setUid] = useState('');//user id state
    var db = firebase.firestore();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                console.log(user.uid)
                setUid(user.uid);
            }
        });
       
    });

    const handleSetBookmark = () => {
        db.collection("data").doc(uid).collection('albums').add({ artistName: artistName, albumTite: albumTite, songTitle: songTitle, releaseDate: releaseDate }).then(() => {
            alert("Song added successfully!!")
        }).catch(() => {
            alert('Something went wrong, log out and try again!!');
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Music Bookmark</Text>
            <TextInput style={styles.input} id="inputField" keyboardType={'default'} placeholder="Artist" onChangeText={(artistName) => setArtistName(artistName)} />
            <TextInput style={styles.input} id="inputField" keyboardType={'default'} placeholder="Album" onChangeText={(albumTite) => setAlbumTitle(albumTite)} />
            <TextInput style={styles.input} id="inputField" keyboardType={'default'} placeholder="Song Title" onChangeText={(songTitle) => setSongTitle(songTitle)} />
            <TextInput style={styles.input} id="inputField" keyboardType={'decimal-pad'} placeholder="Release date" onChangeText={(releaseDate) => setReleaseDate(releaseDate)} />
            <TouchableOpacity onPress={handleSetBookmark}>
                <Text style={styles.button}>ADD</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ShowData')}>
                <Text style={styles.button}>Go To show</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

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
