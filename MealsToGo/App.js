import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {SearchBar} from './component/SearchBar';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SearchBar />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
