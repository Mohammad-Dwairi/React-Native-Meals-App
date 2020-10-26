import React from 'react';
import MealsList from '../components/MealsList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { useSelector } from 'react-redux';

const FavoritesScreen = (props) => {

    const favMeals = useSelector(state => state.meals.favoriteMeals);
    return (
        <MealsList mealsList={favMeals} navigation={props.navigation} />
    );
}

FavoritesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'My Favorites',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title='Menu' iconName='ios-menu' onPress={() => navData.navigation.toggleDrawer()} />
            </HeaderButtons>
        )
    };
}

export default FavoritesScreen;