import React from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

const NewBudget = () => {
  return (
    <View style={styles.container}>
      <Text>Define Budget</Text>
      <TextInput></TextInput>
      <Pressable>
        <Text>Add budget</Text>
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
});

export default NewBudget;
