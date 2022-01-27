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
 import AsyncStorage from '@react-native-async-storage/async-storage'
 

 //Platform.os === 'ios' ? ios sizing : sizing
 const STATUES = {
   COMPLETE: 1,
   CANCELLED: 2
 }
 

  

   
 const App = () => {
   const [focusSubject, setFocusSubject] = useState(null);
   const [focusHistory, setFocusHistory] = useState([]);
   
   const addFocusHistorySubjectWithStatus = (subject, status) => {
     setFocusHistory([ { Key: String(focusHistory.length) + 1, subject, status }, ...focusHistory])
   };
   
   const onClear = () => {
     setFocusHistory([]);
   };
  
    const saveFocusHistory = async () => {
     try {
       await AsyncStorage.setItem('focusHistory', JSON.stringify(focusHistory));
     } catch (e) {
       console.log(e);
     }
   };

     const loadFocusHistory = async  () => {
     try {
       const history = await AsyncStorage.getItem('focusHistory');
       if (history && JSON.parse(history).length) {
         setFocusHistory(JSON.parse(history));
       }
     } catch (e) {
       console.log(e);
     }
   };

   useEffect(() => {
     loadFocusHistory();
   }, [])

   useEffect(() => {
     saveFocusHistory();
   }, [focusHistory]);
 

   return (
     <ImageBackground
       style={styles.img}
       resizeMode='cover'
       source={require('././assets/images/mountains.jpg')}
       >
       <View styel={styles.container}>
         {focusSubject ? (
           <Timer
             focusSubject={focusSubject}
             onTimerEnd={() => {
               addFocusHistorySubjectWithStatus(focusSubject, STATUES.COMPLETE)
               setFocusSubject(null);
             }}
             clearSubject={() => {
               addFocusHistorySubjectWithStatus(focusSubject, STATUES.CANCELLED)
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