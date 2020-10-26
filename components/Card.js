import React from 'react';
import { View, TouchableOpacity, StyleSheet, ImageBackground, Platform, Dimensions } from 'react-native';
import Title from './Title';
import { COLORS } from '../constants/Colors';

const CategoryItem = props => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.gridItem} onPress={props.onPress}>
                <ImageBackground source={{ uri: props.image }} style={styles.image}>
                    <Title style={styles.text}>{props.title}</Title>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 8,
        shadowOffset: { width: 3, height: 3 }
    },
    gridItem: {
        margin: 10,
        height: Dimensions.get('window').height / 4.5,
        backgroundColor: COLORS.accent,
        borderRadius: 15,
        borderColor: COLORS.primary,
        borderWidth: 2,
        overflow: 'hidden'
    },
    text: {
        color: COLORS.text,
        fontFamily: 'Raleway-Bold',
        padding: 5,
        fontSize: 15,
    },
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    }
});

export default CategoryItem;