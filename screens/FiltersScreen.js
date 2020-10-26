import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';
import CustomHeaderButton from '../components/CustomHeaderButton';
import Filter from '../components/Filter';
import { setFilters } from '../store/actions/actions';

const FilterScreen = () => {

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegeterian, setIsVegeterian] = useState(false);

    const dispatch = useDispatch();

    const saveFiltersHandler = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegeterian: isVegeterian
        };

        dispatch(setFilters(appliedFilters));
    }, [isGlutenFree, isLactoseFree, isVegan, isVegeterian, dispatch]);

    useEffect(() => {
        saveFiltersHandler();
    }, [saveFiltersHandler]);

    return (
        <View style={styles.container}>
            <Filter filterName='Gluten Free' onPress={(newValue) => setIsGlutenFree(newValue)} state={isGlutenFree} />
            <Filter filterName='Lactose Free' onPress={(newValue) => setIsLactoseFree(newValue)} state={isLactoseFree} />
            <Filter filterName='Vegan' onPress={(newValue) => setIsVegan(newValue)} state={isVegan} />
            <Filter filterName='Vegeterian' onPress={(newValue) => setIsVegeterian(newValue)} state={isVegeterian} />
        </View>
    );
}

FilterScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Meals Filter',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title='Menu' iconName='ios-menu' onPress={() => navData.navigation.toggleDrawer()} />
            </HeaderButtons>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    }
});

export default FilterScreen;