import { TestWatcher } from '@jest/core';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

//<Text style={styles.title}></Text>
const onChange = () => {

}
export const Focus = () => {

  return (
    <View style={styles.container}>
    
      <TextInput style={styles.inputfield}
        placeholder='What do you want to focus on:'
       
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 300,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  }, inputfield: {
    opacity: .9,
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: 'transparent'
  
    
    
  }
})