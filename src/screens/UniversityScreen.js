import { View, Text, StyleSheet, Button, Alert, TextInput, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

//consultas apis
import { qConsultarUniversidad } from '../config/ApiQuerys';


const UniversityScreen = () => {
    const [pais, setPais] = useState();
    const [res, setRes] = useState([]);

    const getUniversidades = (country) => {
        qConsultarUniversidad(country);
    }

    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: "https://th.bing.com/th/id/R.7a619086bd8f3c2040e4828f35f8d913?rik=h7XzaRl1xjBy4g&pid=ImgRaw&r=0" }}
                style={{ width: "100%", height: 200, marginBottom: 20 }}
            />
            <TextInput 
                style={styles.input}
                placeholder="Universidad"
                keyboardType="default"
                cursorColor="skyblue"
                onChangeText={pais => setPais(pais)}
                value={pais}
                //defaultValue={""}
            />
            <Button 
                title="Calcular"
                onPress={() => getUniversidades(pais)}
                style={{ marginTop: 15 }}
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
        paddingHorizontal: 15,
    },
})
  

export default UniversityScreen