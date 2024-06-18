import React, {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {Picker} from '@react-native-picker/picker';
import globalStyles from '../styles';
import Expense from '../domain/models/Expense';

interface ExpenseFormProps {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  handleExpense: (expense: Expense) => void;
  expense: Expense;
  setExpense: Dispatch<SetStateAction<Expense>>;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({
  setShowModal,
  handleExpense,
  expense,
  setExpense,
}) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    if (expense?.name) {
      setName(expense.name);
      setAmount(expense.amount);
      setCategory(expense.category);
      setId(expense.id);
    }
  }, [expense]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Pressable
          style={styles.cancelBtn}
          onPress={() => {
            setShowModal(false);
            setExpense(new Expense());
          }}>
          <Text style={styles.cancelBtnText}>Cancel</Text>
        </Pressable>
      </View>
      <View style={styles.form}>
        <Text style={styles.title}>
          {expense?.name ? 'Edit Expense' : 'New Expense'}
        </Text>
        <View style={styles.field}>
          <Text style={styles.label}>Expense name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Name of the expense e.g. Food"
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Expense amount:</Text>
          <TextInput
            style={styles.input}
            placeholder="Amount of the expense e.g. 300"
            value={amount}
            onChangeText={setAmount}
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Expense category:</Text>
          <Picker
            selectedValue={category}
            onValueChange={itemValue => {
              setCategory(itemValue);
            }}>
            <Picker.Item label="-- Select --" value="" />
            <Picker.Item label="Savings" value="savings" />
            <Picker.Item label="Food" value="food" />
            <Picker.Item label="Health" value="health" />
            <Picker.Item label="Subscriptions" value="subscriptions" />
            <Picker.Item label="Other" value="other" />
          </Picker>
        </View>
        <Pressable
          style={styles.submitBtn}
          onPress={() => {
            handleExpense(new Expense(name, amount, category));
          }}>
          <Text style={styles.submitBtnText}>
          {expense?.name ? 'Save expense changes' : 'Add expense'}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E40AF',
    flex: 1,
  },
  cancelBtn: {
    height: 40,
    marginTop: 32,
    marginHorizontal: 24,
    backgroundColor: '#DB2777',
    justifyContent: 'center',
    borderRadius: 8,
  },
  cancelBtnText: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  form: {
    ...globalStyles.container,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    marginBottom: 32,
    color: '#64748B',
  },
  field: {
    marginVertical: 8,
  },
  label: {
    color: '#64748B',
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    marginTop: 8,
  },
  submitBtn: {
    height: 40,
    marginTop: 20,
    justifyContent: 'center',
    backgroundColor: '#3B82F6',
    borderRadius: 8,
  },
  submitBtnText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default ExpenseForm;
