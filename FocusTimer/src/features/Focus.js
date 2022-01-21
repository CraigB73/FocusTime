
import  React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../component/RoundedButton';


export const Focus = ({addSubject}) => {
  const [text, setText] = useState("");
  const [subject, setSubject] = useState(null)
  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.textInput}
        label='What do you want to focus on:'
        value={text}
        onChangeText={text => setText(text)}
        underlineColor='transparent'
        underlineColorAndroid='transparent'
        onSubmitEditing={({nativeEvent}) => {setSubject(nativeEvent.text)}}
      />
      <RoundedButton
        size={45}
        title='+'
        onPress={() => addSubject(subject)}
       
      />
    </View>

  )
}
const styles = StyleSheet.create({

  inputContainer: {
    flexDirection: 'row',
    paddingTop: 300,
    alignItems: 'center',
    marginRight: 5
  },

  textInput: {
    flex: 1, 
    fontWeight: 'bold',
    fontSize: 20,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: 'transparent',
    marginRight: 5,
    marginLeft: 5,
  },

})