import React from 'react'
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'

import { Picker } from '@react-native-picker/picker'

const ExpenseForm = () => {
  return (
    <SafeAreaView>
        <View>
            <Pressable>
                <Text></Text>
            </Pressable>
        </View>
        <View>
            <Text>New Expense</Text>
            <View>
                <Text>Expense name:</Text>
                <TextInput placeholder='Name of the expense e.g. Food' />
            </View>
            <View>
                <Text>Expense amount:</Text>
                <TextInput placeholder='Amount of the expense e.g. 300' />
            </View>
            <View>
                <Text>Expense category:</Text>
                <Picker>
                    <Picker.Item label='-- Select --' value='' />
                    <Picker.Item label='Savings' value='savings' />
                    <Picker.Item label='Food' value='food' />
                    <Picker.Item label='Health' value='health' />
                    <Picker.Item label='Subscriptions' value='subscriptions' />
                    <Picker.Item label='Other' value='other' />
                </Picker>
            </View>
            <Pressable>
                <Text>Add Expense</Text>
            </Pressable>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

})

export default ExpenseForm
