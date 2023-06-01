import { View, Text } from 'react-native'
import React from 'react'

export default function Profile({route,navigation}) {
    console.log(route.params)
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontWeight:"bold",fontSize:50}}>Profile</Text>

      <View>
       <Text>Name: {route.params.userName}</Text>
       <Text>Email: {route.params.userEmail}</Text>
       <Text>Password: {route.params.userPassword}</Text>
      </View>
    </View>
  )
}