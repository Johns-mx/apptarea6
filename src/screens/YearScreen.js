import { View, Text, StyleSheet, Button, Alert, TextInput, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

//consultas apis
import { getApi, qPredecirEdad, qPredecirGenero } from '../config/ApiQuerys';


const YearScreen = () => {
    const [name, setName] = useState();
    const [resultado, setResultado] = useState();
    const [age, setAge] = useState();

    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: "https://th.bing.com/th/id/R.bb0074e0a3f842a108bb9ffff2503bf9?rik=EgdvI4%2b%2b6StERA&pid=ImgRaw&r=0" }}
                style={{ width: "100%", height: 200, marginBottom: 20 }}
            />
            <TextInput 
                style={styles.input}
                placeholder="Nombre"
                keyboardType="default"
                cursorColor="skyblue"
                onChangeText={name => setName(name)}
                value={name}
                //defaultValue={""}
            />
            <Button 
                title="Calcular"
                onPress={() => qPredecirEdad(name)}
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
  

export default YearScreen