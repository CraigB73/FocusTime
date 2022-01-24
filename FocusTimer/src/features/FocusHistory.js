import React from "react";
import { View, StyleSheet, FlatList, Text, SafeAreaView } from 'react-native';

import { RoundedButton } from "../component/RoundedButton";
import { fontSizes } from "../utilities/sizes";

const HistoryItem = ({ item, index }) => {
  return (
    <Text style={styles.historyItem(item.status)}>
      {item.subject}
    </Text>
  )
}
export const FocusHistory = ({ focusHistory, onClear }) => {
  
  const clearHistory = () => {
    onClear();
  }
  return (
      <>
      <SafeAreaView >
      <Text style={styles.title}>Things we've Focus on:</Text>
      {!!focusHistory.length && (
        <FlatList
        style={{ }}
        contentContainerStyle={{fontWeight: 'bold', alignItems: 'center' }}
        data={focusHistory}
        renderItem={HistoryItem}
        />
      )}
      </SafeAreaView>
      </>
    )
}
  
const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status > 1 ? 'red' : 'green',
    fontSize: 40,
  }),
  title: {
    color: 'darkred',
    fontSize: 30,
  }
  

})
  

