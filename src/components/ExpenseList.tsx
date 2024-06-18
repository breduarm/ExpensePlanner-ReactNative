import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Expense from '../domain/models/Expense';
import ExpenseDetail from './ExpenseDetail';

interface ExpenseListProps {
  expenses: Expense[];
}

const ExpenseList: React.FC<ExpenseListProps> = ({expenses}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expenses</Text>

      {expenses.length === 0 ? (
        <Text style={styles.expensesEmpty}>There is no expenses</Text>
      ) : (
        expenses.map(expense => (
          <ExpenseDetail key={expense.id} expense={expense} />
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
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
