import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import globalStyles from '../styles';
import { formatAmount } from '../helpers';

const ControlBudget = ({budget}) => {
  return(
    <View style={styles.container}>
        <View style={styles.centerGraph}>
            <Image style={styles.image} source={ require('../assets/img/grafico.jpg') } />
        </View>

        <View style={styles.containerText}>
            <Text style={styles.value}>
                <Text style={styles.labelValue}>Budget:</Text>
                {formatAmount(budget)}
            </Text>

            <Text style={styles.value}>
                <Text style={styles.labelValue}>Available:</Text>
                {formatAmount(budget)}
            </Text>

            <Text style={styles.value}>
                <Text style={styles.labelValue}>Spent:</Text>
                {formatAmount(budget)}
            </Text>
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
    container : {
        ...globalStyles.container
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
})

export default ControlBudget;
