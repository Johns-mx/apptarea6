import { View, Text, StyleSheet, Button, Alert, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
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