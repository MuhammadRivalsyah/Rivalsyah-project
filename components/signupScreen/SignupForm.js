import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Validator } from 'email-validator'
import {auth} from '../../firebase'



const SignupForm = ({navigation}) => {
     const handleSignUp = () => {
          auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
              const user = userCredentials.user;
              console.log('Registered with:', user.email);
            })
            .catch(error => alert(error.message))
        }
//      const SignupFormSchema = Yup.object().shape({
//           email: Yup.string().email().required('Email is required'),
//           username: Yup.string().required().min(4, 'Username must be at least 4 characters'),
//           password: Yup.string().required().min(6, 'Password must be at least 6 characters'),
// })

// const onSignup = async (email, password, username) => {
//      try {
         

//           // const response=await fetch(`https://rivalsyahproject-default-rtdb.firebaseio.com/users.json`,
//           // {
//           //      method: 'POST',
//           //      headers: {
//           //           "Content-Type": "application/json"
//           //      },
//           //      body: JSON.stringify({
//           //           email:email,
//           //           username:username,
//           //           password:password,
//           //      })
//           // })
//           auth.createUserWithEmailAndPassword(email, password)
//           .then((e)=>{
//                                     const user=e.user
//                                     console.log(user)
//           }).catch((error)=>{
//           })
          
//      } catch(error) {
//           Alert.alert(error.message)
//      }
// }

return (
     <View style={styles.wrapper}>
 
           <Formik
                initialValues={{email: '', username: '', password: ''}}
                onSubmit={(values) => {
                 onSignup(values.email, values.password, values.username)
                }}
                //validationSchema={SignupFormSchema}
                validateOnMount={true}
           >
                {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
           <>
                    {/* email */}
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
 
                         {/* username */}
                         <View style={[styles.inputField,
                          {
                               borderColor: 
                               1 > values.username.length || values.username.length >= 4
                               ? '#ccc' 
                               : 'red',
                          },
                          
                          ]}
                          >

                         
                               
                          <TextInput
                          placeholderTextColor='#444'
                          placeholder='Username'
                          autoCapitalize='none'
                          autoCorrect={false}
                          secureTextEntry={false}
                          textContentType='username'
                          autoFocus={true} 
                          onChangeText={handleChange('username')}
                          onBlur={handleBlur('username')}
                          value={values.username}
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
                          <View style={{alignItems: 'flex-end', marginBottom: 30}}>
                               <Text style={{color: '#6BB0E5'}}>Forgot Password</Text>
                          </View>
                     <Pressable titleSize={20} 
                                style={styles.button(isValid)} 
                                onPress={handleSignUp}
                               // disabled={!isValid} 
                     >
                          <Text style={styles.buttonText}>Sign Up</Text>
                     </Pressable>
 
                     <View style={styles.signupContainer}>
                          <Text>Already have an account?</Text>
                          <TouchableOpacity onPress={() => navigation.goBack()}>
                               <Text style={{color: '#6BB0E5'}}> Log In</Text>
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


export default SignupForm