import React, {useState} from 'react';
import {
  Alert,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from './components/Header';
import NewBudget from './components/NewBudget';
import ControlBudget from './components/ControlBudget';
import Expense from './domain/models/Expense';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App(): React.JSX.Element {
  const [budget, setBudget] = useState(0);
  const [isBudgetValid, setIsBudgetValid] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [expense, setExpense] = useState<Expense>(new Expense());

  const handleNewBudget = (budget: number) => {
    console.log('=== new Budget: ', budget);
    if (budget > 0) {
      setIsBudgetValid(true);
    } else {
      Alert.alert('Error', 'The budget must be greater than 0');
    }
  };

  const handleExpense = (expense: Expense) => {
    if (!expense.isValidExpense()) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    setExpenses([...expenses, expense]);
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
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

        {isBudgetValid && <ExpenseList expenses={expenses} setShowModal={setShowModal} setExpense={setExpense}/>}
      </ScrollView>

      {showModal && (
        <Modal
          visible={showModal}
          animationType="slide"
          onRequestClose={() => {
            setShowModal(false);
          }}>
          <ExpenseForm
            setShowModal={setShowModal}
            handleExpense={handleExpense}
            expense={expense}
            setExpense={setExpense}
          />
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
    minHeight: 400,
  },
  img: {
    width: 60,
    height: 60,
    position: 'absolute',
    right: 20,
    bottom: 40,
  },
});

export default App;
