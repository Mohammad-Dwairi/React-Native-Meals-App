import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from './AppText';
import { COLORS } from '../constants/Colors';

const MealInfo = props => {

    const textColor = (complexity) => {
        switch (complexity) {
            case 'simple': return COLORS.simple;
            case 'hard': return COLORS.hard;
            case 'challenging': return COLORS.challenging
            default: return COLORS.text
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.side}>
                <AppText style={{ fontFamily: 'Raleway-Bold' }}>
                    {props.duration} Minutes
                </AppText>
            </View>
            <View style={styles.center}>
                <AppText style={{ color: textColor(props.complexity), fontFamily: 'Raleway-Bold' }}>
                    {props.complexity.toUpperCase()}
                </AppText>
            </View>
            <View style={styles.side}>
                <AppText style={{ fontFamily: 'Raleway-Bold' }}>
                    {props.affordability.toUpperCase()}
                </AppText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 5,
        height: 40,
        marginVertical: 20,
        borderColor: COLORS.primary
    },
    side: {
        flex: 1,
        alignItems: 'center'
    },
    center: {
        flex: 1,
        alignItems: 'center',
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderColor: COLORS.primary
    }
});

export default MealInfo;