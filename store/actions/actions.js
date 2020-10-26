export const setFavorite = id => {
    return {
        type: 'SET_FAV', mealId: id
    }
};

export const setFilters = (filters) => {
    return {
        type: 'SET_FILTERS',
        filters: filters
    }
};