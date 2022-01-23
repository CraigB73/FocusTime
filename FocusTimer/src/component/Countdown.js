import React, { useState, useEffect} from "react";
import { Text, View, StyleSheet } from 'react-native';

//setInterval() look up in MDN

const mintuesToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => time < 10 ? `0${time}` : time;


export const Countdown = ({
  minutes = 1,
  isPaused,
  onProgress
}) => {
  const interval = React.useRef(null);
  
  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        return time;
      }
      const timeLeft = time - 1000;
      onProgress(timeLeft / mintuesToMillis(minutes))
      return timeLeft;
    })
  }

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return; 
    }
    interval.current = setInterval(countDown, 1000);
    
      return () => clearInterval(interval.current)
  }, [isPaused])
  const [millis, setMillis] = useState(mintuesToMillis(minutes))
  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{formatTime(minutes)} : {formatTime(seconds)}</Text>

    </View>
  )
}


const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 75,
    fontWeight: 'bold',
    color: 'white',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 25,
    alignSelf: 'center',
    paddingRight: 5,
    paddingLeft: 5,
  },


})