import { View, Text, StyleSheet, Button, Alert, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

//consultas apis
import { getApi, qPredecirGenero } from '../config/ApiQuerys';


const GenreScreen = () => {
    const [name, setName] = useState(String);
    const [resultado, setResultado] = useState(String);

    const handle = ({name}) => {
        setResultado(qPredecirGenero(name));
    }

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder="Nombre"
                keyboardType="default"
                cursorColor="purple"
                onChangeText={name => setName(name)}
                value={name}
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