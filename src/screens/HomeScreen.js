import { View, Text, StyleSheet, Image } from 'react-native'
import React, {useState} from 'react'

const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: "https://images.vexels.com/media/users/3/184630/isolated/preview/47fe502ffe26816c23c21de704b084d8-ilustraci-oacute-n-de-herramienta-de-navaja-suiza-by-vexels.png" }}
        style={{ marginVertical: 50, width: "100%", height: "100%", alignSelf: "center" }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10
  },
})

export default HomeScreen