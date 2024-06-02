import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const Header = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>Expense Planner</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 30,
    color: '#FFFFFF',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    paddingTop: 24,
  },
});

export default Header;
