import React, { useCallback, useEffect } from 'react';
import { ScrollView, StyleSheet, Image, Dimensions } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { COLORS } from '../constants/Colors';
import MealInfo from '../components/MealInfo';
import Ingredients from '../components/Ingredients';
import Steps from '../components/Steps';
import MealHealth from '../components/MealHealth';
import { useSelector, useDispatch } from 'react-redux';
import { setFavorite } from '../store/actions/actions';

const MealDetailScreen = props => {

    const mealId = props.navigation.getParam('selectedMealId');
    const meals = useSelector(state => state.meals.meals);
    const selectedMeal = meals.find(meal => meal.id === mealId);
    const isFav = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealId));

    const dispatch = useDispatch();

    const setFavoriteHandler = useCallback(() => {
        dispatch(setFavorite(mealId));
    }, [dispatch, mealId, isFav]);

    useEffect(() => {
        props.navigation.setParams({ title: selectedMeal.title });
    }, [selectedMeal, mealId]);

    useEffect(() => {
        props.navigation.setParams({ setFav: setFavoriteHandler });
    }, [setFavoriteHandler]);

    useEffect(() => {
        props.navigation.setParams({ isFav: isFav });
    }, [isFav]);

    return (
        <ScrollView key={selectedMeal.id} style={styles.container}>
            <Image source={{ uri: selectedMeal.imageURL }} style={styles.image} />
            <MealInfo duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability} />
            <Ingredients id={selectedMeal.id} />
            <Steps id={selectedMeal.id} />
            <MealHealth id={selectedMeal.id} />
        </ScrollView>
    );
}

MealDetailScreen.navigationOptions = navigationData => {
    const title = navigationData.navigation.getParam('title');
    const setFav = navigationData.navigation.getParam('setFav');
    const isFav = navigationData.navigation.getParam('isFav');
    return {
        headerTitle: title,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="Favorite" iconName={isFav ? 'ios-star' : 'ios-star-outline'} onPress={setFav} />
            </HeaderButtons>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    image: {
        width: '100%',
        height: Dimensions.get("screen").height / 3,
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: 10
    }
});

export default MealDetailScreen;