import axios from 'axios';
import { Alert } from 'react-native';


export async function getApiAccount() {
    const axios = require('axios').default;
    const data = '';
    
    var config = {
        method: 'GET',
        url: 'https://account.ypw.com.do/api/v1/account/', 
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };
    
    axios(config)
        .then(function (response) {
            // handle success
            return JSON.stringify(response.data.message);
        })
        .catch(function (error) {
            // handle error
            return error;
        });
};


//consultar genero por nombre - axios
export async function qPredecirGenero(name) {
    const axios = require('axios').default;
    
    const config = {
        method: 'GET',
        url: 'https://api.genderize.io/?name='+name, 
        headers: {
            'Content-Type': 'application/json'
        },
    };
    
    await axios(config)
        .then(function (response) {
            // handle success
            //alert(JSON.stringify(response.data.gender));
            if (response.data.gender == "male") {
                Alert.alert("Genero", "Masculino");
            } else if (response.data.gender == "female") {
                Alert.alert("Genero", "Femenino");
            } else {
                return "No puede ser";
            }
        })
        .catch(function (error) {
            // handle error
            Alert.alert("Error", error);
        });
};


//adivina edad segun nombre
export async function qPredecirEdad(name) {
    const axios = require('axios').default;
    
    const config = {
        method: 'GET',
        url: `https://api.agify.io/?name=${name}`, 
        headers: {
            'Content-Type': 'application/json'
        },
    };
    
    await axios(config)
        .then(function (response) {
            // handle success
            //Alert.alert("Edad", JSON.stringify(response.data.age));
            if (response.data.age > 40) {
                Alert.alert("Edad", response.data.age+" Abuelo");
            } else if (response.data.age >= 20 && response.data.age <= 40) {
                Alert.alert("Edad", "Adulto joven");
            } else if (response.data.age < 20) {
                Alert.alert("Edad", "Joven");
            } else {
                return "No puede ser";
            }
        })
        .catch(function (error) {
            // handle error
            Alert.alert("Error", error);
        });
}; 


export async function qConsultarUniversidad(pais) {
    const axios = require('axios').default;
    
    const config = {
        method: 'GET',
        url: `http://universities.hipolabs.com/search?country=${pais}`, 
        headers: {
            'Content-Type': 'application/json'
        },
    };
    
    await axios(config)
        .then(function (response) {
            // handle success
            Alert.alert("Universidades", JSON.stringify(response.data));
        })
        .catch(function (error) {
            // handle error
            Alert.alert("Error", error);
        });
};


export async function qConsultarClima() {
    const axios = require('axios').default;
    
    const config = {
        method: 'GET',
        url: `https://api.openweathermap.org/data/2.5/weather?lat=19,058468&lon=-70,153374&appid=ad5e012bdf668c162c30b344200a49e4&lang=es`, 
        headers: {
            'Content-Type': 'application/json'
        },
    };
    
    await axios(config)
        .then(function (response) {
            // handle success
            Alert.alert("Clima", JSON.stringify(response?.data.weather[0]["description"]));
        })
        .catch(function (error) {
            // handle error
            Alert.alert("Error", error);
        });
};