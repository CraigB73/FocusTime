//import { useKeepAwake } from '@sayem314/react-native-keep-awake';
import React, { useState } from "react";
import { View, Text, StyleSheet, Vibration, Platform } from 'react-native';

import { ProgressBar } from 'react-native-paper';
import { Countdown } from "../component/Countdown";
import { RoundedButton } from "../component/RoundedButton";
import { Timing } from "./Timing";



const DEFAULT_TIME = 0.1;

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  // keepAwake() is not responding need some looking into for it to work.
  //useKeepAwake();
 

  const [minutes, setMinutes] = useState(DEFAULT_TIME);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);

  const onProgress = (progress) => {
    setProgress(progress);
  }

  const vibrate = () => {
    if (Platform.OS === 'ios ') {
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), 1000);
    } else {
      Vibration.vibrate(10000);
    }
  }
 // Add sound to play when onend() runs as well vibrate !!!!
  const onEnd = () => {
    vibrate();
    setMinutes(DEFAULT_TIME);
    setProgress(1);
    setIsStarted(false);
    onTimerEnd();
  
    
  }
  const changeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(true);
    }
  return (

    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={onProgress}
          onEnd={onEnd}
        />
      </View>
      <View style={styles.focuscontainer}>
        <Text style={styles.title}>You are focuing on: </Text>
        <Text style={styles.task}>{focusSubject} </Text>
      </View>
      <ProgressBar
        progress={progress}
        color='rgba(55, 180, 222, .7)'
        style={{height: 20, marginTop: 20, marginBottom: 20 }}
        />

      <View style={styles.buttonsWrapper}>
        <Timing onChangeTime={changeTime} />
      </View>
      <View style={styles.startPauseButtonWrapper}>
        {isStarted ? (
          <RoundedButton title='pause' onPress={() => { setIsStarted(false)
          }} />) : (
          <RoundedButton title='start' onPress={() => { setIsStarted(true)
          }} />
        )}
      </View>
      <View style={styles.clearSubject}>
        <RoundedButton title='-' size={50} onPress={() => clearSubject()} />
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
  buttonsWrapper: {
    flexDirection: 'row',
  },
  clearSubject: {
    paddingTop: 50,
    paddingLeft: 30,
  }
 

})