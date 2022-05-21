import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity, Alert, } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Validator } from 'email-validator'
import { ProgressBar } from 'react-native-web'
import {auth} from '../../firebase'


 


const LoginForm = (props) => {
     const handleLogin = () => {
          auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
              const user = userCredentials.user;
              props.navigation.navigate('HomeScreen')
            })
            .catch(error => alert(error.message))
        }
//      const LoginFormSchema = Yup.object().shape({
//           email: Yup.string().email().required('Email is required'),
//           password: Yup.string().min(6, 'Password must be at least  characters'),
//      })

// const onLogin = async (email, password) => {
//      try {
//           // await firebase.auth().signInWithEmailAndPassword(email, password)
//           // console.log('logged in successfully', email, password)
//           const response=await fetch(`https://rivalsyahproject-default-rtdb.firebaseio.com/users.json`,
//           {
//                method: 'GET',
//                headers: {
//                     "Content-Type": "application/json"
//                },
              
//           })
//           console.log(response)
//      } catch(error) {
//           Alert.alert(error.message)
//      }
// }

  return (
    <View style={styles.wrapper}>

          <Formik
               initialValues={{email: '', password: ''}}
               onSubmit={(values) => {
                onLogin(values.email, values.password)
               }}
               //validationSchema={LoginFormSchema}
               validateOnMount={true}
          >
               {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
                    {/* username */}
                    <View style={styles.inputField}
                    >
                         <TextInput
                         placeholderTextColor='#444'
                         placeholder='Phone number, username or email'
                         autoCapitalize='none'
                         keyboardType='email-address'
                         textContentType='emailAddress'
                         autoFocus={true} 
                         onChangeText={handleChange('email')}
                         onBlur={handleBlur('email')}
                         value={values.email}
                         />
                         </View>

                    {/* password */}
                         <View style={[styles.inputField,
                         {
                              borderColor: 
                              1 > values.password.length || values.password.length >= 8
                              ? '#ccc' 
                              : 'red',
                         },
                         ]}
                         >
                         <TextInput
                         placeholderTextColor='#444'
                         placeholder='Password'
                         autoCapitalize='none'
                         autoCorrect={false}
                         secureTextEntry={true}
                         textContentType='password'
                         autoFocus={true} 
                         onChangeText={handleChange('password')}
                         onBlur={handleBlur('password')}
                         value={values.password}
                         />
                         </View>

                         {/* forgot password */}
                         <View style={{alignItems: 'flex-end', marginBottom: 30}}>
                              <Text style={{color: '#6BB0E5'}}>Forgot Password</Text>
                         </View>

                         {/* button */}
                    <Pressable titleSize={20} 
                               style={styles.button(isValid)} 
                               onPress={handleLogin}
                               
                    >
                         <Text style={styles.buttonText}>Log in</Text>
                    </Pressable>

                         {/* sign up */}
                    <View style={styles.signupContainer}>
                         <Text>Don't have an account?</Text>
                         <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
                              <Text style={{color: '#6BB0E5'}}> Sign up</Text>
                         </TouchableOpacity>
                    </View>
          </>
          )}
      </Formik>
    </View>
    
  )
}

const styles = StyleSheet.create({
     wrapper: {
          marginTop: 80,
     },

     inputField: {
          borderRadius: 4,
          padding: 8,
          backgroundColor: '#FAFAFA',
          marginBottom: 10,
          borderWidth: 1
          
     },

     button: (isValid) => ({
          backgroundColor: isValid ? '#0096F6' : '#ADD8E6',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 42,
          borderRadius: 4,
     }),

     buttonText: {
          fontWeight: '600',
          color: '#fff',
          fontSize: 20,
     },

     signupContainer: {
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
          marginTop: 50,
     },

})


export default LoginForm