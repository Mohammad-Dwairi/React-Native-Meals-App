import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { CATEGORIES } from '../data/dummy-data';
import Card from '../components/Card';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

const CategoriesScreen = (props) => {
    const renderGridItem = item => (
        <Card
            title={item.item.title}
            image={item.item.image}
            onPress={() => props.navigation.navigate('Meals', { categoryId: item.item.id })}
        />
    );

    return (
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    );
}

CategoriesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Meals Categories',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
                <Item title='Menu' iconName='ios-menu' onPress={() => navData.navigation.toggleDrawer()} />
            </HeaderButtons>
        )
    };
}

export default CategoriesScreen;