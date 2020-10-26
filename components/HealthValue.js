import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AppText from './AppText';
import { COLORS } from '../constants/Colors';

const HealthValue = props => {
    return (
        <View style={styles.container}>
            <AppText style={styles.text}>{props.title}</AppText>
            <AntDesign name="check" size={24} color={COLORS.simple} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 50,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: COLORS.primary
    },
    text: {
        color: COLORS.text,
        fontFamily: 'Raleway-Bold'
    }
});

export default HealthValue;