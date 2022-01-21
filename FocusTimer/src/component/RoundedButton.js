import { TestWatcher } from '@jest/core';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125, 
  ...props
  }) => {

  return (
    <View style={styles.buttoncontainer}>
      <TouchableOpacity style={[styles(size).radius]} onPress={props.onPress}>
        <Text style={[styles(size).text, textStyle]} onPress={props.onPress}>{props.title}</Text>

      </TouchableOpacity>
    </View>
  )
}

const styles = (size) => 
 StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 5,
      borderColor: '#fff',
      
    },
    text: {
      color: '#fff',
      fontSize: size / 3,
   },
  
  });
