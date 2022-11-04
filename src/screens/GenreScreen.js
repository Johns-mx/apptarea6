import { View, Text, StyleSheet, Button, Alert, Image, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios';

//consultas apis
import { getApi, qPredecirGenero } from '../config/ApiQuerys';


const GenreScreen = () => {
    const [name, setName] = useState(String);
    const [resultado, setResultado] = useState([]);

    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: "https://th.bing.com/th/id/R.5a79d5e10f081d6d3551583d8cec480b?rik=%2b9UWCG9El7HZ8Q&pid=ImgRaw&r=0&sres=1&sresct=1" }}
                style={{ width: "100%", height: 200, marginBottom: 20 }}
            />
            <TextInput 
                style={styles.input}
                placeholder="Nombre"
                keyboardType="default"
                cursorColor="purple"
                onChangeText={name => setName(name)}
                defaultValue={name}
            />
            <Button 
                title="Probar Api"
                onPress={() => qPredecirGenero(name)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    input: {
        width: "80%",
        marginVertical: 10,
        alignSelf: "center",
        //borderColor: "#f2f2f2",
        borderWidth: 0.5,
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 15
    },
})
  

export default GenreScreen