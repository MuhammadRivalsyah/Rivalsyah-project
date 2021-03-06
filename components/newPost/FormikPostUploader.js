import { View, Text, Image, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik, formik } from 'formik'
import { NavigationContainer } from '@react-navigation/native'
import validURL from 'valid-url'

const PLACEHOLDE_IMG = 'https://img.icons8.com/ios/100/ffffff/no-image-gallery.png'

const uploadPostSchema = Yup.object().shape({
     imageUrl: Yup.string().url().required('A URL is required'),
     caption: Yup.string().max(2200, 'Caption has reached the character limit.'),

})

const FormikPostUploader = (navigation) => {
     const [thumbnailUrl, setThumbnailURL] = useState(PLACEHOLDE_IMG)

  return (
       <Formik
       initialValues={{caption: '', imageUrl: ''}}
       onSubmit={(values) => {
          console.log(values)
          console.log('Your post has been uploaded successfully!')
          NavigationContainer.goBack()
     }}
       validationSchema={uploadPostSchema}
       validateOnMount={true}
       >
            {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) =>
                <>
          <View style={{margin: 20,
                     justifyContent: 'space-between',
                      flexDirection: 'row'
                      }}>

                     <Image source={{uri: validURL.isUri(thumbnailUrl)
                      ? thumbnailUrl 
                      : PLACEHOLDE_IMG}}
                      style={{width: 100, height: 100}} />

               <View style={{ flex: 1, marginLeft: 12}}>
                <TextInput
                
                style={{ color : 'white', fontSize:20}}
                placeholder='Write a caption' 
                placeholderTextColor={'gray'}
                multiline={true}
                onChangeText={handleChange('caption')}
                onBlur={handleBlur('caption')}
                value={values.caption}
                />
               </View>
          </View>
                
                <TextInput
                onChange={e => setThumbnailURL(e.nativeEvent.text)}
                style={{ color : 'white', fontSize:18}}
                placeholder='Enter Image Url' 
                placeholderTextColor={'gray'}
                onChangeText={handleChange('imageUrl')}
                onBlur={handleBlur('imageUrl')}
                value={values.imageUrl}
                />

               {errors.imageUrl && (
                    <Text style={{fontSize: 10 ,color: 'red' }}>
                {errors.imageUrl}
                    </Text>
                )}

                <Button onPress={handleSubmit} title='Share' disabled={!isValid} />
                </>
                
                
          }


       </Formik>

  )
}

export default FormikPostUploader