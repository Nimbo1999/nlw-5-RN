import React from 'react';
import {StatusBar} from 'expo-status-bar';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Button from '../components/button';

import wateringImage from '../assets/watering.png';
import colors from '../styles/colors';

export default function WellcomePage() {
    return (
        <SafeAreaView style={style.container}>
            <Text style={style.title}>
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma fácil
            </Text>

            <Image source={wateringImage} style={style.image} />

            <Text style={style.subTitle}>
                Não esqueça mais de regar suas plantas
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <Button title=">" />

            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38
    },
    subTitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading
    },
    image: {
        width: 292,
        height: 285
    },
});