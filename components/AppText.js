import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/Colors';

const AppText = props => <Text style={{...styles.text, ...props.style}}>{props.children}</Text>;

const styles = StyleSheet.create({
    text: {
        color: COLORS.text,
        fontFamily: 'Raleway-Medium'
    }
});

export default AppText;