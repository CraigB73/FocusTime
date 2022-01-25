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
      <SafeAreaView style={{ alignItems: 'center' }}>
        {!!focusHistory.length && (
          <>
            <Text style={styles.title}>Things we've focus on:</Text>
            <FlatList
              style={{}}
              contentContainerStyle={{ fontWeight: 'bold', alignItems: 'center' }}
              data={focusHistory}
              renderItem={HistoryItem}
            />
            <View style={styles.clearContainer}>
              <RoundedButton
                title={'Clear'}
                size={75}
                onPress={() => onClear()} />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};
  
const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status > 1 ? 'red' : 'green',
    fontSize: 40,
    paddingTop: 10,
  }),
  title: {
    color: 'white',
    fontSize: 30,
    paddingTop: 60,
  },
  clearContainer: {
    alignItems: 'center',
    paddingTop: 10,
  }
  

})
  

