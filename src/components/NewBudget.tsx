import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

const NewBudget = ({handleNewBudget}) => {
    const [budget, setBudget] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Define Budget</Text>
      <TextInput
        style={styles.input}
        value={budget.toString()}
        onChangeText={newText => setBudget(parseFloat(newText))}
        keyboardType="numeric"
        placeholder="Add your budget: e.g. 300"></TextInput>
      <Pressable style={styles.button} onPress={() => handleNewBudget(budget)}>
        <Text style={styles.buttonText}>Add budget</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 24,
    borderRadius: 8,
    paddingVertical: 40,
    paddingHorizontal: 24,
    transform: [{translateY: 50}],
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  label: {
    textAlign: 'center',
    fontSize: 24,
    color: '#3B82F6',
  },
  input: {
    marginTop: 32,
    backgroundColor: '#F5F5F5',
    padding: 8,
    borderRadius: 8,
    textAlign: 'center',
  },
  button: {
    marginTop: 32,
    backgroundColor: '#1048A4',
    height: 40,
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default NewBudget;
