import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from './AppText';

const Title = props => (
    <View style={styles.content}>
        <AppText style={styles.title}>{props.children}</AppText>
    </View>
);

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'rgba(233, 196, 106, 0.8)',
        width: '100%',
        padding: 8,
    },
    title: {
        fontFamily: 'Raleway-Bold',
    }
});

export default Title;