/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Platform } from 'react-native';

import { Focus } from './src/features/Focus';
import { FocusHistory } from './src/features/FocusHistory';
import { Timer } from './src/features/Timer';


//Platform.os === 'ios' ? ios sizing : sizing
const STATUES = {
  COMPLETE: 1,
  CANCELLED: 2
}

const App = () => {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);
  
  const addFocusHistorySubjectWithState = (subject, status) => {
    setFocusHistory([...focusHistory, { subject, status }])
  };
  
  const onClear = () => {
    setFocusHistory([]);
  };
  return (
    <ImageBackground
      style={styles.img}
      resizeMode='cover'
      source={require('././assets/mountains.jpg')}
      >
      <View styel={styles.container}>
        {focusSubject ? (
          <Timer
            focusSubject={focusSubject}
            onTimerEnd={() => {
              addFocusHistorySubjectWithState(focusSubject, STATUES.COMPLETE)
              setFocusSubject(null);
            }}
            clearSubject={() => {
              addFocusHistorySubjectWithState(focusSubject, STATUES.CANCELLED)
              setFocusSubject(null);
            }}
          />) : (
          <>
            <Focus addSubject={setFocusSubject} />
            <FocusHistory focusHistory={focusHistory} onClear={onClear} />
          </>
          )}
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
