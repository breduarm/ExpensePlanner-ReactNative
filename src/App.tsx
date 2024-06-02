import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from './components/Header';

function App(): React.JSX.Element {

  return (
    <View>
      <Header />
      <Text>Expense Planner App</Text>
    </View>
  );
}

const styles = StyleSheet.create({

})

export default App;
