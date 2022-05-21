/*
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen'
import NewPostScreen from './screens/NewPostScreen'

const Stack = createStackNavigator()

const screenOptions = {
     headerShown: false,
}

const SignedInStack = () => (

     <NavigationContainer>
          <Stack.Navigator 
          initialRouteName='HomeScreen'
          screenOptions={screenOptions}
          >
               <Stack.Screen name="Home" component={HomeScreen}  />
               <Stack.Screen name="NewPostScreen" component={NewPostScreen}  />
               <Stack.Screen name="LoginScreen" component={LoginScreen}  />
               <Stack.Screen name="SignupScreen" component={SignupScreen}  />

          </Stack.Navigator>
    </NavigationContainer>
  
)

export default SignedInStack

/* yarn add @react-navigation/stack */
/* yarn add @react-navigation/native */
/* yarn add react-native-gesture-handler */
/* yarn add valid-url */

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginForm from './components/loginScreen/LoginForm';
import SignupForm from './components/signupScreen/SignupForm';
import HomeScreen from "./screens/HomeScreen"
const AuthStack = createNativeStackNavigator();
const AuthScreen=()=> {
  return (
    <AuthStack.Navigator>
         <AuthStack.Screen name="Login" component={LoginForm}></AuthStack.Screen>
         <AuthStack.Screen name="Register" component={SignupForm}></AuthStack.Screen>
     
     
    </AuthStack.Navigator>
    );
}

const HomeStack = createNativeStackNavigator();
const Home=()=> {
     return (
       <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen}></HomeStack.Screen>
            
        
        
       </HomeStack.Navigator>
       );
   }
   
const AppStack = createNativeStackNavigator();



function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
     
        <AppStack.Screen name="Auth" options={{
             headerShown:false
        }} component={AuthScreen} />

<AppStack.Screen name="HomeScreen" options={{
             headerShown:false
        }} component={Home} />
        
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default App;