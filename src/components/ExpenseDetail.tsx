import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Expense from '../domain/models/Expense'

interface ExpenseDetailProps {
    expense: Expense,
}

const ExpenseDetail: React.FC<ExpenseDetailProps> = ({expense}) => {
  return (
    <View>
        <Text>{expense.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default ExpenseDetail