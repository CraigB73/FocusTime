import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export const Timer = ({ focusSubject }) => {

  return (

    <View style={styles.container}>
      <View >
        <Text style={styles.title}>You are focuing on: </Text>
        <Text style={styles.task}>{focusSubject} </Text>
      </View>
      
    </View>
  )
}; 

const styles = StyleSheet.create({
  container: {
    paddingTop: 200,
  },
  title: {
    color: 'white',
    textAlign: 'center',
  },
  task: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },

})