import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export function Button({buttonText}) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7}>
      <Text>{buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370F7',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
    fontSize: 30,
    marginBottom: 24,
    marginLeft: 12,
    fontWeight: 'bold',
    // marginLeft: 12,
  },
});
