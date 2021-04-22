import React from 'react';
import {StyleSheet, View, Text, Image, StatusBar} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

function Header() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá</Text>
                <Text style={styles.userName}>Matheus Lopes</Text>
            </View>

            <Image
                source={{uri: 'https://avatars.githubusercontent.com/u/42950729?s=400&u=43f4efdd8199d2e3bb146d3089dd97f5e04e06d6&v=4'}}
                style={styles.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: StatusBar.currentHeight,
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    userName: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 32,
    },
    image: {
        width: 56,
        height: 56,
        borderRadius: 26,
    }
});

export default Header;
