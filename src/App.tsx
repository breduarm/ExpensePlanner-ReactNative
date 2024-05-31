import React, {useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import Header from './components/Header';
import NewBudget from './components/NewBudget';
import ControlBudget from './components/ControlBudget';

function App(): React.JSX.Element {
  const [isBudgetValid, setIsBudgetValid] = useState(false);

  const handleNewBudget = (budget: number) => {
    console.log('=== new Budget: ', budget);
    if (budget > 0) {
      setIsBudgetValid(true);
    } else {
      Alert.alert('Error', 'The budget must be greater than 0');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        {isBudgetValid ? (
          <ControlBudget />
        ) : (
          <NewBudget handleNewBudget={handleNewBudget} />
        )}
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
