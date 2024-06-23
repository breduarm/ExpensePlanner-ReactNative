import React, {Dispatch, SetStateAction, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import globalStyles from '../styles';
import {Picker} from '@react-native-picker/picker';
import Expense from '../domain/models/Expense';

interface FilterProps {
  filter: string;
  expenses: Expense[];
  setFilter: Dispatch<SetStateAction<string>>;
  setFilteredExpenses: Dispatch<SetStateAction<Expense[]>>;
}

const Filter: React.FC<FilterProps> = ({filter, expenses, setFilter, setFilteredExpenses}) => {
  useEffect(() => {
    if (filter === '') {
        setFilteredExpenses([])
    } else {
        const filteredExpenses = expenses.filter( expense => expense.category === filter )
        setFilteredExpenses(filteredExpenses)
    }
  }, [filter]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Expenses Filter</Text>
      <Picker
        selectedValue={filter}
        onValueChange={value => {
          setFilter(value);
        }}>
        <Picker.Item label="-- Select --" value="" />
        <Picker.Item label="Savings" value="savings" />
        <Picker.Item label="Food" value="food" />
        <Picker.Item label="Health" value="health" />
        <Picker.Item label="Subscriptions" value="subscriptions" />
        <Picker.Item label="Other" value="other" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    transform: [{translateY: 0}],
    marginTop: 72,
  },
  label: {
    fontSize: 22,
    fontWeight: '900',
    color: '#64748B',
  },
});

export default Filter;
