import React, {useState} from "react";
import { View, Text, StyleSheet, Vibration, Platform } from 'react-native';


import { ProgressBar } from 'react-native-paper';
import { Countdown } from "../component/Countdown";
import { RoundedButton } from "../component/RoundedButton";
import { Timing } from "./Timing";

import { useKeepAwake } from '@sayem314/react-native-keep-awake';

const DEFAULT_TIME = 0.2;

export const Timer = ({ focusSubject }) => {
  useKeepAwake();

  const [minutes, setMinutes] = useState(DEFAULT_TIME);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);

  const onProgress = (progress) => {
    setProgress(progress);
  }
  const virbate = () => {
    if (Platform.OS === 'ios ') {
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), 1000);
    } else {
      Vibration.vibrate(10000);
    }
  }

  const onEnd = () => {
    virbate();
    setMinutes(DEFAULT_TIME);
    setProgress(1);
    setIsStarted(false);
  }
  const changeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
    
    }
  return (

    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={1}
          isPaused={!isStarted}
          onProgress={onProgress}
          onEnd
        />
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

      <View style={styles.buttonswrapper}>
        <Timing onChangeTime={changeTime} />
      </View>
      <View style={styles.startPauseButtonWrapper}>
        {isStarted ? (<RoundedButton title='pause' onPress={() => {
          setIsStarted(false)
          
        }} />) : (
            <RoundedButton title='start' onPress={() => {
              setIsStarted(true)
            }} />
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
  buttonswrapper: {
    flexDirection: 'row',
  }

})