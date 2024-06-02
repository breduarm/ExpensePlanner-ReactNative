import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './components/Header';
import NewBudget from './components/NewBudget';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <NewBudget />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
  },
  header: {
    backgroundColor: '#3B82F6',
},
});

export default App;
