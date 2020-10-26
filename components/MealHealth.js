import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../constants/Colors';
import AppText from './AppText';
import { useSelector } from 'react-redux';
import HealthValue from './HealthValue';

const MealHealth = props => {
    const selectedMeal = useSelector(state => state.meals.meals).find(meal => meal.id === props.id);

    const nutritional = () => {
        let values = [];
        if (selectedMeal.isGlutenFree) {
            values.push(<HealthValue title='Gluten Free' />);
        }
        if (selectedMeal.isLactoseFree) {
            values.push(<HealthValue title='Lactose Free' />);
        }
        if (selectedMeal.isVegan) {
            values.push(<HealthValue title='Vegan' />);
        }
        if (selectedMeal.isVegetarian) {
            values.push(<HealthValue title='Vegetarian' />);
        }
        return values;
    }

    const nutritionalValue = nutritional().map((value, index) =>
        <View key={index}>
            {value}
        </View>
    );


    return (
        <View style={styles.container}>
            {
                nutritionalValue.length !== 0 ?
                    <View style={styles.titleView}>
                        <AppText style={styles.title}>Nutritional Value</AppText>
                    </View>
                    :
                    null
            }
            {nutritionalValue}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    },
    title: {
        fontFamily: 'Raleway-Bold',
        fontSize: 20,
        color: COLORS.primary,
        textAlign: 'center'
    },
    titleView: {
        borderColor: COLORS.primary,
        borderBottomWidth: 2,
        marginBottom: 10
    }
});

export default MealHealth;