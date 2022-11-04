import { View, Text, StyleSheet, Button, Alert, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

//consultas apis
import { qConsultarClima } from '../config/ApiQuerys';


const YearScreen = () => {
    const [resultado, setResultado] = useState([]);

    const handleFunction = () => {
      setResultado(qConsultarClima());
    };

    return (
        <View style={styles.container}>
            <Button 
                title="Clima"
                onPress={() => handleFunction()}
            />
            <Text>{resultado}</Text>
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