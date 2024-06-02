import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import Header from './components/Header';
import NewBudget from './components/NewBudget';

function App(): React.JSX.Element {

  const handleNewBudget = (budget: number)=> {
    console.log("=== new Budget: ", budget)
    if (budget > 0) {
      console.log("Valid Budget")
    } else {
      Alert.alert("Error", "The budget must be greater than 0")
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <NewBudget handleNewBudget={handleNewBudget} />
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
