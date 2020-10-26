import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import AppText from './AppText';
import { COLORS } from '../constants/Colors';

const Ingredients = props => {

    const meal = useSelector(state => state.meals.meals).find(meal => meal.id == props.id);

    const renderIngredients = meal.ingredients.map((i, index) =>
        <View style={styles.item} key={meal.id + index}>
            <AppText style={styles.text}>{i}</AppText>
        </View>
    );

    return (
        <View>
            <AppText style={styles.title}>Ingredients</AppText>
            {renderIngredients}
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
        backgroundColor: COLORS.accent,
        borderColor: COLORS.primary
    },
    title: {
        color: COLORS.primary,
        fontFamily: 'Raleway-Bold',
        fontSize: 20,
        textAlign: 'center'
    },
    text: {
        fontFamily: 'Raleway-Bold'
    }
});

export default Ingredients;