import React, {Dispatch, SetStateAction} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Expense from '../domain/models/Expense';
import ExpenseDetail from './ExpenseDetail';

interface ExpenseListProps {
  expenses: Expense[];
  filter: string;
  filteredExpenses: Expense[];
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setExpense: Dispatch<SetStateAction<Expense>>;
}

const ExpenseList: React.FC<ExpenseListProps> = ({
  expenses,
  filter,
  filteredExpenses,
  setShowModal,
  setExpense,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expenses</Text>

      {filter
        ? filteredExpenses.map(expense => (
            <ExpenseDetail
              key={expense.id}
              expense={expense}
              setShowModal={setShowModal}
              setExpense={setExpense}
            />
          ))
        : expenses.map(expense => (
            <ExpenseDetail
              key={expense.id}
              expense={expense}
              setShowModal={setShowModal}
              setExpense={setExpense}
            />
          ))}

      {expenses.length === 0 ||
        (!!filter && filteredExpenses.length === 0 && (
          <Text style={styles.expensesEmpty}>There is no expenses</Text>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 100,
  },
  title: {
    marginTop: 20,
    color: '#64748B',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '700',
  },
  expensesEmpty: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
  },
});

export default ExpenseList;
