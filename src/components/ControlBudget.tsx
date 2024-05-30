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

        <View>
            <Text>
                <Text>Budget:</Text>
                {formatAmount(budget)}
            </Text>

            <Text>
                <Text>Available:</Text>
                {formatAmount(budget)}
            </Text>

            <Text>
                <Text>Spent:</Text>
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
    }
})

export default ControlBudget;
