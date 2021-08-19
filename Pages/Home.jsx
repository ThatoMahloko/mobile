import React, {useState} from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, DatePickerIOSBase} from 'react-native';
import DatePicker from "react-datepicker";
import firebase from 'firebase'
import "react-datepicker/dist/react-datepicker.css";
const Home = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Music Bookmark Page</Text>
            <TextInput style={styles.input} id="inputField" keyboardType={'default'} placeholder="Artist" onChangeText={(lastName) => setLastName(lastName)} />
            <TextInput style={styles.input} id="inputField" keyboardType={'default'} placeholder="Album" onChangeText={(lastName) => setLastName(lastName)} />
            <TextInput style={styles.input} id="inputField" keyboardType={'default'} placeholder="Song Title" onChangeText={(lastName) => setLastName(lastName)} />
            <TextInput style={styles.input} id="inputField" keyboardType={'decimal-pad'} placeholder="Release date" onChangeText={(lastName) => setLastName(lastName)} />
            {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} style={styles.date} /> */}
            <TouchableOpacity>
                <Text style={styles.button}>touch</Text>
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
        fontSize: 40,
    },
    date:{
        
    }
})
