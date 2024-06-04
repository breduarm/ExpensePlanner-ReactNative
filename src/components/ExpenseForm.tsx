import React from 'react';
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

const ExpenseForm = ({setShowModal}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Pressable
          style={styles.cancelBtn}
          onPress={() => {
            setShowModal(false);
          }}>
          <Text style={styles.cancelBtnText}>Cancel</Text>
        </Pressable>
      </View>
      <View style={styles.form}>
        <Text style={styles.title}>New Expense</Text>
        <View style={styles.field}>
          <Text style={styles.label}>Expense name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Name of the expense e.g. Food"
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Expense amount:</Text>
          <TextInput
            style={styles.input}
            placeholder="Amount of the expense e.g. 300"
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Expense category:</Text>
          <Picker>
            <Picker.Item label="-- Select --" value="" />
            <Picker.Item label="Savings" value="savings" />
            <Picker.Item label="Food" value="food" />
            <Picker.Item label="Health" value="health" />
            <Picker.Item label="Subscriptions" value="subscriptions" />
            <Picker.Item label="Other" value="other" />
          </Picker>
        </View>
        <Pressable style={styles.submitBtn}>
          <Text style={styles.submitBtnText}>Add Expense</Text>
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
