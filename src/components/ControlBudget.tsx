import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import globalStyles from '../styles';
import {formatAmount} from '../helpers';
import Expense from '../domain/models/Expense';
import CircularProgress from 'react-native-circular-progress-indicator';

const ControlBudget = ({budget, expenses}) => {
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const totalSpent = expenses.reduce(
      (total: number, expense: Expense) => Number(expense.amount) + total,
      0,
    );
    const totalAvailable = budget - totalSpent;
    const totalPercentage = ((budget - totalAvailable) / budget) * 100;

    setSpent(totalSpent);
    setAvailable(totalAvailable);
    setTimeout(() => {
      setPercentage(totalPercentage);
    }, 250);
  }, [expenses]);

  return (
    <View style={styles.container}>
      <View style={styles.centerGraph}>
        <CircularProgress
          radius={150}
          activeStrokeColor="#3B82F6"
          inActiveStrokeColor="#F5F5F5"
          activeStrokeWidth={20}
          inActiveStrokeWidth={20}
          duration={1000}
          value={percentage}
          valueSuffix="%"
          title="Spent"
          titleStyle={{fontWeight: '700', fontSize: 20}}
          titleColor="#64748B"
        />
      </View>

      <View style={styles.containerText}>
        <Text style={styles.value}>
          <Text style={styles.labelValue}>Budget: {''}</Text>
          {formatAmount(budget)}
        </Text>

        <Text style={styles.value}>
          <Text style={styles.labelValue}>Available: {''}</Text>
          {formatAmount(available)}
        </Text>

        <Text style={styles.value}>
          <Text style={styles.labelValue}>Spent: {''}</Text>
          {formatAmount(spent)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
  },
  centerGraph: {
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
  },
  containerText: {
    marginTop: 56,
  },
  value: {
    marginBottom: 8,
    textAlign: 'center',
    fontSize: 24,
  },
  labelValue: {
    fontWeight: '700',
    color: '#3B82F6',
  },
});

export default ControlBudget;
