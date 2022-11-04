import { View, Text, StyleSheet, Button, Image } from 'react-native';
import React, { useState } from 'react';

//consultas apis
import { getApi, qPredecirEdad, qPredecirGenero, qConsultarClima } from '../config/ApiQuerys';


const WeatherScreen = () => {
    const [resultado, setResultado] = useState(Array);

    const handleFunction = () => {
      qConsultarClima();
    };

    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: "https://images.fineartamerica.com/images-medium-large-5/hispaniola-mda-information-systemsscience-photo-library.jpg" }}
                style={{ width: "100%", height: 200 }}
            />
            <Button 
                title="Clima"
                onPress={() => handleFunction()}
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
  

export default WeatherScreen