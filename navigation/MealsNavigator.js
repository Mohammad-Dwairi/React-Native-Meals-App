import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer'
import CategoriesScreen from '../screens/CategoriesScreen';
import MealsScreen from '../screens/MealsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { COLORS } from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import FilterScreen from '../screens/FiltersScreen';
import { Platform } from 'react-native';


const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    Meals: MealsScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: Platform.OS === 'android' ? COLORS.primary : '' },
        headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary
    }
});

const FavMealsNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: Platform.OS === 'android' ? COLORS.primary : '' },
        headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary
    }
});

const TabNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
        }
    },
    Favorites: {
        screen: FavMealsNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
        tabStyle: { backgroundColor: Platform.OS === 'android' ? COLORS.primary : '' }
    },

});

const FiltersNavigator = createStackNavigator({
    Filters: FilterScreen
}, {
    defaultNavigationOptions: {
        headerStyle: { backgroundColor: Platform.OS === 'android' ? COLORS.primary : '' },
        headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary
    }
}
);

const SideDrawerNavigator = createDrawerNavigator({
    App: {
        screen: TabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals',

        }
    },
    Filters: FiltersNavigator,

}, {
    contentOptions: {
        labelStyle: {
            fontFamily: 'Raleway-Bold',
        },
        activeTintColor: COLORS.primary,

    },
    drawerBackgroundColor: COLORS.accent,
    drawerType: 'slide',
    drawerWidth: '50%',

}
);

export default createAppContainer(SideDrawerNavigator);