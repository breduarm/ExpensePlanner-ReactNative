import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ExpenseList = () => {
  return(
    <View style={styles.container}>
        <Text style={styles.title}>Expenses</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    color: '#64748B',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '700',
  },
});

export default ExpenseList;
