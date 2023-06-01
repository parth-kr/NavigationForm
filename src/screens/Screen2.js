import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Screen2() {
  return (
    <View style={customStyle.container}>
      <Text style={customStyle.text}>Screen2</Text>
    </View>
  )
}

const customStyle=StyleSheet.create({
    container:{
      backgroundColor:"yellow",
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    },
    text:{
      fontSize:20,
      fontWeight:"bold"
    }
  })