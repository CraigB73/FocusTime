
import  React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../component/RoundedButton';

const onChange = () => {

}
export const Focus = () => {
  const [text, setText] = useState("");
  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.textInput}
        label='What do you want to focus on:'
        value={text}
        onChangeText={text => setText(text)}
        underlineColor='slategrey'
        underlineColorAndroid='transparent'
      />
      <RoundedButton
        style={styles.button}
        title='+'
        size={55}

      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    paddingTop: 300,
    alignItems: 'center'
  },

  textInput: {
    flex: 1, 
    fontWeight: 'bold',
    fontSize: 20,
    borderColor: 'slategrey',
    borderWidth: 1,
    backgroundColor: 'transparent',
    marginRight: 5,
    marginLeft: 5,
  },

})