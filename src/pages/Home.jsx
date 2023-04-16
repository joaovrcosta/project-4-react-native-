import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from '../components/Button';

export function Home() {
  function handleOnPress() {
    console.warn('Im alive!');
  }

  return (
    <>
      <View style={styles.app}>
        <View style={styles.container}>
          <Button buttonText="/" onPress={handleOnPress} />
          <Button buttonText="1" onPress={handleOnPress} />
          <Button buttonText="2" onPress={handleOnPress} />
          <Button buttonText="3" onPress={handleOnPress} />
        </View>
        <View style={styles.container}>
          <Button buttonText="+" onPress={handleOnPress} />
          <Button buttonText="4" onPress={handleOnPress} />
          <Button buttonText="5" onPress={handleOnPress} />
          <Button buttonText="6" onPress={handleOnPress} />
        </View>
        <View style={styles.container}>
          <Button buttonText="*" onPress={handleOnPress} />
          <Button buttonText="7" onPress={handleOnPress} />
          <Button buttonText="8" onPress={handleOnPress} />
          <Button buttonText="9" onPress={handleOnPress} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#191919',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
