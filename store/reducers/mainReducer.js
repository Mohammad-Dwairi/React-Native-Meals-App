import { MEALS } from '../../data/dummy-data';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mainReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_FAV':
            const favIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
            if (favIndex >= 0) {
                const updatedFavMeals = [...state.favoriteMeals];
                updatedFavMeals.splice(favIndex, 1);
                return { ...state, favoriteMeals: updatedFavMeals };
            }
            else {
                const updatedFavMeals = [...state.favoriteMeals];
                const selectedMeal = state.meals.find(meal => meal.id == action.mealId)
                return { ...state, favoriteMeals: updatedFavMeals.concat(selectedMeal) };
            }
        case 'SET_FILTERS':
            const appliedFilters = action.filters;
            const updatedFilterdMeals = state.meals.filter(meal => {
                if (!meal.isGlutenFree && appliedFilters.glutenFree)
                    return false;
                if (!meal.isLactoseFree && appliedFilters.lactoseFree)
                    return false;
                if (!meal.isVegan && appliedFilters.vegan)
                    return false;
                if (!meal.isVegetarian && appliedFilters.vegeterian)
                    return false;
                return true;
            });
            return { ...state, filteredMeals: updatedFilterdMeals }
    }
    return state;
}

export default mainReducer;