import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../constants/Colors';
import AppText from './AppText';
import { useSelector } from 'react-redux';

const Steps = props => {
    const selectedMeal = useSelector(state => state.meals.meals).find(meal => meal.id === props.id);

    const renderSteps = selectedMeal.steps.map((step, index) =>
        <View style={styles.direction} key={selectedMeal.id + index}>
            <AppText style={styles.number}>{index + 1}</AppText>
            <View style={styles.step}>
                <AppText style={styles.text}>{step}</AppText>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <AppText style={styles.title}>Steps</AppText>
            <View style={styles.box}>
                {renderSteps}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    title: {
        fontFamily: 'Raleway-Bold',
        fontSize: 20,
        textAlign: 'center',
        color: COLORS.primary
    },
    box: {
        padding: 10,
        backgroundColor: COLORS.accent,
        borderWidth: 2,
        borderColor: COLORS.primary,
        borderRadius: 10,
        marginVertical: 10
    },
    step: {
        borderLeftWidth: 2,
        padding: 5,
        borderColor: COLORS.primary,
        marginVertical: 5,
        marginLeft: 5
    },
    direction: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 15,
    },
    number: {
        fontFamily: 'Raleway-Bold',
        fontSize: 17,
    }
});

export default Steps;