import * as React from 'react';
import { Text, View, useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { MaterialCommunityIcons, Fontisto, Octicons, Ionicons, FontAwesome5, AntDesign, Foundation } from '@expo/vector-icons';

//screens
import HomeScreen from '../screens/HomeScreen';
import YearScreen from '../screens/YearScreen';
import UniversityScreen from '../screens/UniversityScreen';
import GenreScreen from '../screens/GenreScreen';
import WeatherScreen from '../screens/WeatherScreen';
import AboutScreen from '../screens/AboutScreen';


//drawer - menu
const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
        <Drawer.Navigator 
            initialRouteName='Home'
        >
            
            <Drawer.Screen 
                name="Home" 
                component={HomeScreen} 
                options = {{
                    title:"Home",
                    drawerIcon: () =>
                        <MaterialCommunityIcons name="home" size={24} color="black" />,
                    headerShown: true
                }}
            />
            
            <Drawer.Screen 
                name="Genero" 
                component={GenreScreen} 
                options = {{
                    title:"Genero",
                    drawerIcon: () =>
                        <Fontisto name="genderless" size={24} color="black" />,
                    headerShown: true
                }}
            />
            
            <Drawer.Screen 
                name="Year" 
                component={YearScreen} 
                options = {{
                    title:"Year",
                    drawerIcon: () =>
                        <Octicons name="number" size={24} color="black" />,
                    headerShown: true
                }}
            />

            <Drawer.Screen 
                name="University" 
                component={UniversityScreen} 
                options = {{
                    title:"University",
                    drawerIcon: () =>
                        <FontAwesome5 name="university" size={24} color="black" />,
                    headerShown: true
                }}
            />
            
            <Drawer.Screen 
                name="Weather" 
                component={WeatherScreen} 
                options = {{
                    title:"Clima",
                    drawerIcon: () =>
                        <MaterialCommunityIcons name="weather-cloudy" size={24} color="black" />,
                    headerShown: true
                }}
            />
            
            <Drawer.Screen 
                name="About" 
                component={AboutScreen} 
                options = {{
                    title:"About me",
                    drawerIcon: () =>
                        <AntDesign name="contacts" size={24} color="black" />,
                    headerShown: true
                }}
            />
        </Drawer.Navigator>
    );
};


const Navigator = () => {
    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    )
};


export default Navigator