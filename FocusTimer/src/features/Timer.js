import React, {useState} from "react";
import { View, Text, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';

import { Countdown } from "../component/Countdown";
import { RoundedButton } from "../component/RoundedButton";


export const Timer = ({ focusSubject }) => {
  const [minutes, setMinutes] = useState(0.1);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(2);

  const onProgress = (progress) => {
    setProgress(progress);
  }
  return (

    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown isPaused={!isStarted} onProgress={onProgress} />
      </View>
      <View style={styles.focuscontainer}>
        <Text style={styles.title}>You are focuing on: </Text>
        <Text style={styles.task}>{focusSubject} </Text>
      </View>
      <ProgressBar
        progress={progress}
        color='lightblue'
        style={{height: 20, marginTop: 10, marginBottom: 10 }}
        />
     
     
      <View style={styles.time_button_wrapper}>
        <RoundedButton title='10' size={100} />
        <RoundedButton title='15' size={100} />
        <RoundedButton title='15' size={100} />
      </View>
      <View style={styles.startPauseButtonWrapper}>
        { isStarted ? (<RoundedButton title='pause' onPress={() => setIsStarted(false)} /> ) :(
        <RoundedButton title='start' onPress={() => setIsStarted(true)} />
        )}
      </View>
  
    </View>
  )
}; 

const styles = StyleSheet.create({
  container: {
    paddingTop: 200,
  },
  focuscontainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  task: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  countdown: {
    marginBottom: 20, 
  },
  startPauseButtonWrapper: {
    alignItems: 'center',
  },
  time_button_wrapper: {
  
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
    marginLeft: 10,

  }

})