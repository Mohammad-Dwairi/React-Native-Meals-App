import React from 'react';
import { View, Switch, StyleSheet } from 'react-native';
import { COLORS } from '../constants/Colors';
import AppText from './AppText';

const Filter = props => {
    return (
        <View style={styles.container}>
            <AppText style={styles.text}>{props.filterName}</AppText>
            <Switch
                trackColor={{ true: COLORS.accent }}
                thumbColor='white'
                value={props.state}
                onValueChange={props.onPress}
                ios_backgroundColor
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5%',
        borderWidth: 2,
        marginVertical: 10,
        borderColor: COLORS.primary,
        borderRadius: 10,
    },
    text: {
        fontFamily: 'Raleway-Bold',
        fontSize: 16,
    }
});

export default Filter;