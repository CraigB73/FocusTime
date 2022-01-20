import { TestWatcher } from '@jest/core';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Focus = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What do you want to focus on:</Text>
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
  }
})