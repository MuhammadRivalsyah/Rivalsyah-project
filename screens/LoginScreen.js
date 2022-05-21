import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import LoginForm from '../components/loginScreen/LoginForm'

const LOGO =
     'https://img.icons8.com/wired/64/000000/android.png'

const LoginScreen = (navigation) => {
return (

    <View style={styles.container}>
         <View style={styles.logoContainer}>
               <Image source={{uri: LOGO, height:100, width:100}} />
         </View>
       { /* <LoginForm navigation={navigation}/> */}
    </View>
    )
}

const styles = StyleSheet.create({ 
     container: {
          flex: 1,
          backgroundColor: 'white',
          paddingTop: 50,
          paddingHorizontal: 12,
     },

     logoContainer: {
          alignItems: 'center',
          marginTop: 60,
     },
})


export default LoginScreen