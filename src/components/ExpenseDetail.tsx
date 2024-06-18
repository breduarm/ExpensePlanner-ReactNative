import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import Expense from '../domain/models/Expense';
import globalStyles from '../styles';
import {formatAmount} from '../helpers';

const expenseCategoryIcons = {
  savings: require('../assets/img/icono_ahorro.png'),
  food: require('../assets/img/icono_comida.png'),
  health: require('../assets/img/icono_salud.png'),
  subscriptions: require('../assets/img/icono_suscripciones.png'),
};

interface ExpenseDetailProps {
  expense: Expense;
}

const ExpenseDetail: React.FC<ExpenseDetailProps> = ({expense}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.containerImage}>
          <Image
            style={styles.expenseImage}
            source={expenseCategoryIcons[expense.category]}
          />
          <View style={styles.containerText}>
            <Text style={styles.category}>{expense.category}</Text>
            <Text style={styles.expenseName}>{expense.name}</Text>
          </View>
        </View>
        <Text style={styles.expenseAmount}>{formatAmount(Number(expense.amount))}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    marginBottom: 20,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerImage: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  containerText: {
    flex: 1,
  },
  category: {
    color: '#94A3B8',
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  expenseName: {
    color: '#64748D',
    fontSize: 22,
    marginBottom: 4,
  },
  expenseImage: {
    width: 80,
    height: 80,
  },
  expenseAmount: {
    fontSize: 20,
    fontWeight: '700',
  },
});

export default ExpenseDetail;
