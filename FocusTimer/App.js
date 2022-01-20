/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

import { Focus } from './src/features/Focus';




const App = () => {
  const [focusSubject, setFocusSubject] = useState(null)
  
  
  return (
    <ImageBackground
      style={styles.img}
      resizeMode='cover'
      source={{
        uri: 'https://placeimg.com/640/480/nature'
      }}
      >
      <View styel={styles.container}>
        {focusSubject ? (<Text>Timer goes here</Text>) : (<Focus />)}
      </View>
    </ImageBackground>
   
  )
}
const styles = StyleSheet.create({
  img: {
    flex: 1
  },
  container: {
    justifyContent: 'center'
    
  },
})
export default App;
