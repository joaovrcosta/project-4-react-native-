import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export function Home() {
  const [number, setNumber] = useState(0);

  function handleIncrementInTwo() {
    setNumber(prevCount => prevCount + 2);
  }

  function handleDecrementInTwo() {
    if (number >= 0) {
      setNumber(prevCount => prevCount - 2);
    }
  }

  function handleIncrementInTwentyFive() {
    setNumber(prevCount => prevCount + 25);
  }

  function handleDecrementInTwentyFive() {
    if (number >= 0) {
      setNumber(prevCount => prevCount - 25);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.number}>Número: {number}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="+2"
          style={styles.buttons}
          onPress={handleIncrementInTwo}
        />
        <Button
          title="-2"
          style={styles.buttons}
          onPress={handleDecrementInTwo}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="+25"
          onPress={handleIncrementInTwentyFive}
          style={styles.buttons}
        />
        <Button
          title="-25"
          style={styles.buttons}
          onPress={handleDecrementInTwentyFive}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1d1d1d',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%',
    marginTop: 20,
  },
  buttons: {
    backgroundColor: '#A370F7',
  },
});
