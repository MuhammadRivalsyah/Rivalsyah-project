import React from 'react'
import {SafeAreaView,StyleSheet, ScrollView } from 'react-native'
import BottomTabs, { bottomTabsIcons } from '../components/home/BottomTabs'
import Header from '../components/home/Header'
import Post from '../components/home/Post'
import Stories from '../components/home/Stories'
import { POSTS } from '../data/posts'

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
         <Header navigation={navigation}/>
         <Stories />
         <ScrollView>
              {POSTS.map((post, index) => (
          <Post post={post} key={index}/>
              ))}
         </ScrollView>
         <BottomTabs icons={bottomTabsIcons } />     
    </SafeAreaView>
  )
}

const styles =StyleSheet.create({
     container : {
          backgroundColor :'black',
          flex: 1,
     },
})

export default HomeScreen