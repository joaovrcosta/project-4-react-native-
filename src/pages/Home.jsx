import React, {useState} from 'react';
import {View, Text, TextInput, Button, FlatList} from 'react-native';
import styles from '../style/Style';

export function Home() {
  const [min, setMin] = useState(null);
  const [max, setMax] = useState(null);
  const [numbers, setNumbers] = useState([]);

  function handleGenerateNewRandomNumbers() {
    if (min && max) {
      const newArray = [];
      for (let i = 0; i < 5; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        newArray.push(randomNumber);
      }
      setNumbers(newArray);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Valor mínimo:</Text>
      <TextInput
        style={styles.input}
        value={min}
        onChangeText={valor => setMin(parseInt(valor))}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Valor máximo:</Text>
      <TextInput
        style={styles.input}
        value={max}
        onChangeText={valor => setMax(parseInt(valor))}
        keyboardType="numeric"
      />
      <Button
        title="Gerar"
        onPress={handleGenerateNewRandomNumbers}
        style={styles.buttonStyle}
      />
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );
}
