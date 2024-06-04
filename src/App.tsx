import React, {useState} from 'react';
import {
  Alert,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from './components/Header';
import NewBudget from './components/NewBudget';
import ControlBudget from './components/ControlBudget';
import Expense from './domain/models/Expense';
import ExpenseForm from './components/ExpenseForm';

function App(): React.JSX.Element {
  const [budget, setBudget] = useState(0);
  const [isBudgetValid, setIsBudgetValid] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [expenses, setExpenses] = useState([
    new Expense(1, 30),
    new Expense(2, 40),
    new Expense(3, 50),
  ]);

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
          <ControlBudget budget={budget} expenses={expenses} />
        ) : (
          <NewBudget
            budget={budget}
            setBudget={setBudget}
            handleNewBudget={handleNewBudget}
          />
        )}
      </View>

      {showModal && (
        <Modal visible={showModal} animationType="slide" onRequestClose={() => {setShowModal(false)}}>
          <ExpenseForm setShowModal={setShowModal} />
        </Modal>
      )}

      {isBudgetValid && (
        <Pressable
          onPress={() => {
            setShowModal(true);
          }}>
          <Image
            style={styles.img}
            source={require('./assets/img/nuevo-gasto.png')}
          />
        </Pressable>
      )}
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
  img: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: 120,
    right: 20,
  },
});

export default App;
