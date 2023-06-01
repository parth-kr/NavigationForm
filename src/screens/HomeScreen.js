import { View, Text ,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'

export default function HomeScreen({navigation}) {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

function handleSubmit(){
  //console.log(name,email,password)
  navigation.navigate("Profile",{
    userName:name,
    userEmail:email,
    userPassword:password
  })
}

  return (
    <View style={customStyle.container}>
      
      <View>
      <Text>Name</Text>
      <TextInput value={name} placeholder="Enter name" style={customStyle.input1} onChangeText={(val)=>setName(val)}/>
      </View>

      <View>
      <Text>Email</Text>
      <TextInput value={email} placeholder="Enter email" style={customStyle.input1} onChangeText={(val)=>setEmail(val)}/>
      </View>

      <View>
      <Text>Password</Text>
      <TextInput value={password} placeholder="Enter password" style={customStyle.input1} onChangeText={(val)=>setPassword(val)}
      secureTextEntry={true}
      />
      </View>

      <TouchableOpacity style={customStyle.btn} onPress={()=>handleSubmit()}>
        <Text>Submit</Text>
      </TouchableOpacity>

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
  },
  input1:{
    width:200,
    height:40,
    borderWidth:2,
    backgroundColor:"#fff",
    marginBottom:20
  },
  btn:{
    height:40,
    width:80,
    backgroundColor:"green",
    color:"#fff",
    textAlign:"center",
    justifyContent:"center",
    marginTop:20
  }
})