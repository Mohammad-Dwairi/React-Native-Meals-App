import React from 'react';
import { FlatList } from 'react-native';
import Card from './Card';

const MealsList = props => {

    const renderGridItem = meal => (
        <Card
            onPress={() => props.navigation.navigate('MealDetail', { selectedMealId: meal.item.id }
            )}
            title={meal.item.title}
            image={meal.item.imageURL}
        />
    );

    return (
        <FlatList
            data={props.mealsList}
            renderItem={renderGridItem}
        />
    );
}

export default MealsList;