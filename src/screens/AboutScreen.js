import { View, Text, StyleSheet, Image } from 'react-native'
import * as React from 'react';



const AboutScreen = () => {
  return (
    <View style={styles.contenido}>
      <Image source={"/assets/ic_launcher.png"} style={{ alignSelf: "center", width: 200, height: 200 }} />
      <Text style={{ backgroundColor: "#438BD3", fontSize: 18, marginVertical: 20, paddingVertical: 20, paddingHorizontal: 50, borderRadius: 35, fontWeight: "bold", color: "#fff" }}>Johanel Perez Sanchez</Text>
      <Text style={{ fontSize: 18, marginVertical: 10 }}>johanfsk144@gmail.com</Text>
      <Text style={{ fontSize: 18, marginVertical: 10 }}>Youtube: ZRJCoding</Text>
      <Text style={{ fontSize: 18, marginVertical: 10 }}>Fullstack developer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenido: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    textAlign: "center",
    alignItems: "center",
    fontSize: 18
  }
});

export default AboutScreen