import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Profile from "./src/screens/Profile";


export default function App() {

  const Stack =createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home Screen" component={HomeScreen} options={{headerTitleAlign:"center"}}/>
        <Stack.Screen name="Profile" component={Profile} options={{headerTitleAlign:"center"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}