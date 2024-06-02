import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.text}>Expense Planner</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#3B82F6',

    },
    text: {
        textAlign: 'center',
        fontSize: 30,
        color: '#FFFFFF',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        padding: 20,
    }
})

export default Header
