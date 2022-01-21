/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Platform } from 'react-native';

import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer';


//Platform.os === 'ios' ? ios sizing : sizing


const App = () => {
  const [focusSubject, setFocusSubject] = useState('Test subject')
  
  
  return (
    <ImageBackground
      style={styles.img}
      resizeMode='cover'
      source={require('././assets/mountains.jpg')}
      >
      <View styel={styles.container}>
        {focusSubject ? (<Timer focusSubject={setFocusSubject} />) :
          (<Focus addSubject={setFocusSubject} />
          )}
      </View>
        <Text> {focusSubject}</Text>
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
