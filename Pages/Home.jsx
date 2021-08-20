import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { RadioButton } from 'react-native-paper';
import DatePicker from "react-datepicker";
import firebase from 'firebase'
import "react-datepicker/dist/react-datepicker.css";
// import RadioForm
const Home = () => {

    //this is the state for adding data    
    const [releaseDate, setRelaeaseDate] = useState(new Date());//release date
    const [artistName, setArtistName] = useState(new Date());//artist name  
    const [albumTite, setAlbumTitle] = useState(new Date());//album title
    const [songTitle, setSongTitle] = useState(new Date());//song title
    const [uid, setUid] = useState(new Date());//user id state
    //end    
    //this is the state for fetching data 
    const [storageName, setSotrageName] = useState(new Date());
    // end
    // radio buton state
    const [checked, setChecked] = React.useState('first');
    // end
    var db = firebase.firestore();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                setUid(user.uid);
            }
        });
    });

    const handleSetBookmark = () => {
        db.collection("data").doc(uid).collection('albums').add({ artistName: artistName, albumTite: albumTite, songTitle: songTitle, releaseDate: releaseDate }).then(() => {
            alert("Profile created successfully!!")

        }).catch(() => {
            alert('Something went wrong, log out and try again!!');
        })
    }

    const handleFetchAndDisplayData = () => {
        //J3hZjam3n7SnffFZik7XuStiJ473
alert("do stuff")
        firebase.firestore().collection('data').doc(uid).collection('albums').get().then((data)=>{
            data.docs.forEach((item)=>{
                console.log(item.data())
            })
        }).catch((error)=>{
            console.log(error)
        });
      
    }



    return (
        <View style={styles.container}>
            <Text style={styles.text}>Music Bookmark</Text>
            <TextInput style={styles.input} id="inputField" keyboardType={'default'} placeholder="Artist" onChangeText={(artistName) => setArtistName(artistName)} />
            <TextInput style={styles.input} id="inputField" keyboardType={'default'} placeholder="Album" onChangeText={(albumTite) => setAlbumTitle(albumTite)} />
            <TextInput style={styles.input} id="inputField" keyboardType={'default'} placeholder="Song Title" onChangeText={(songTitle) => setSongTitle(songTitle)} />
            <TextInput style={styles.input} id="inputField" keyboardType={'decimal-pad'} placeholder="Release date" onChangeText={(releaseDate) => setRelaeaseDate(releaseDate)} />
            {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} style={styles.date} /> */}
            <TouchableOpacity onPress={handleSetBookmark}>
                <Text style={styles.button}>ADD</Text>
            </TouchableOpacity>

            <View>
                <Text style={{textAlign: 'center', fontSize: 40}}>Search</Text>
                <TextInput style={styles.input} id="inputField" keyboardType={'default'} placeholder="Artist" onChangeText={(artistName) => setArtistName(artistName)} />
                <TouchableOpacity onPress={handleFetchAndDisplayData}>
                    <Text style={styles.button}>touch</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
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
