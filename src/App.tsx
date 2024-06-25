import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from './components/Header';
import NewBudget from './components/NewBudget';
import ControlBudget from './components/ControlBudget';
import Expense from './domain/models/Expense';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Filter from './components/Filter';

function App(): React.JSX.Element {
  const [budget, setBudget] = useState(0);
  const [isBudgetValid, setIsBudgetValid] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [expense, setExpense] = useState<Expense>(new Expense());
  const [filter, setFilter] = useState('');
  const [filteredExpenses, setFilteredExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    getStoredBudget().then((value: number) => {
      if (value > 0) {
        setBudget(value);
        setIsBudgetValid(true);
      }
    });

    getDataObject('expense').then((expense: Expense | null) => {
      if (expense !== null) {
        setExpenses([expense]);
      }
    });
  }, []);

  useEffect(() => {
    if (isBudgetValid) storeBudget();
  }, [isBudgetValid]);

  useEffect(() => {}, [expenses]);

  const storeBudget = async () => {
    try {
      await AsyncStorage.setItem('ExpensePlanner-budget', budget.toString());
    } catch (e) {
      console.log("==== E: There's an error storing the budget: " + budget);
    }
  };

  const getStoredBudget = async (): Promise<number> => {
    try {
      const budgetStr: string =
        (await AsyncStorage.getItem('ExpensePlanner_budget')) ?? '0';
      return parseInt(budgetStr);
    } catch (e) {
      console.log("==== E: There's an error getting the budget");
      return 0;
    }
  };

  const storeExpenses = async () => {
    try {
      const expensesJsonStr = JSON.stringify(expenses);
      await AsyncStorage.setItem('ExpensePlanner_expense', expensesJsonStr);
    } catch (e) {
      console.log("==== E: There's an error saving expenses: " + expenses);
    }
  };

  const getDataObject = async (key: string): Promise<Expense | null> => {
    try {
      const expenseJsonStr = await AsyncStorage.getItem(key);
      return expenseJsonStr ? JSON.parse(expenseJsonStr) : null;
    } catch (e) {
      console.log("==== E: There's an error getting key: " + {key});
      return null;
    }
  };

  const handleNewBudget = (budget: number) => {
    console.log('=== new Budget: ', budget);
    if (budget > 0) {
      setIsBudgetValid(true);
    } else {
      Alert.alert('Error', 'The budget must be greater than 0');
    }
  };

  const handleExpense = (expense: Expense, isEditAction: boolean) => {
    if (!expense.isValidExpense()) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    if (isEditAction) {
      const updatedExpenses = expenses.map(item =>
        item.id === expense.id ? expense : item,
      );
      setExpenses(updatedExpenses);
    } else {
      setExpenses([...expenses, expense]);
    }

    setShowModal(false);
  };

  const deleteExpense = (id: string) => {
    Alert.alert(
      'Do you want to delete this expense',
      'An deleted expense cannot be restored',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Delete',
          onPress: () => {
            const updatedExpenses = expenses.filter(item => item.id !== id);
            setExpenses(updatedExpenses);
            setShowModal(false);
            setExpense(new Expense());
          },
        },
      ],
    );
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

        {isBudgetValid && (
          <>
            <Filter
              filter={filter}
              expenses={expenses}
              setFilter={setFilter}
              setFilteredExpenses={setFilteredExpenses}
            />
            <ExpenseList
              expenses={expenses}
              filter={filter}
              filteredExpenses={filteredExpenses}
              setShowModal={setShowModal}
              setExpense={setExpense}
            />
          </>
        )}
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
            deleteExpense={deleteExpense}
          />
        </Modal>
      )}

      {isBudgetValid && (
        <Pressable
          style={styles.fab}
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
  fab: {
    position: 'absolute',
    width: 60,
    height: 60,
    right: 20,
    bottom: 40,
  },
  img: {
    width: 60,
    height: 60,
  },
});

export default App;
