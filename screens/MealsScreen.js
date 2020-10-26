import React from 'react';
import { CATEGORIES } from '../data/dummy-data';
import MealsList from '../components/MealsList';
import { useSelector } from 'react-redux';

const MealsScreen = (props) => {
    const meals = useSelector(state => state.meals.filteredMeals);
    const catId = props.navigation.getParam('categoryId');
    const mealsList = meals.filter(meal => meal.categoryIds.indexOf(catId) >= 0)
    return (
        <MealsList navigation={props.navigation} mealsList={mealsList} />
    );
}

MealsScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCatgory = CATEGORIES.find(catgory => catId === catgory.id)
    return { headerTitle: selectedCatgory.title }
};

export default MealsScreen;