import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {StyleSheet, SafeAreaView, Text, View} from 'react-native';

import Button from '../components/Button';

import colors from '../styles/colors'
import fonts from '../styles/fonts'

function Confirmation() {
    const navigation = useNavigation();

    function onPressButton() {
        navigation.navigate('PlantSelect');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.emoji}>
                        😊
                    </Text>

                    <Text style={styles.title}>
                        Prontinho
                    </Text>

                    <Text style={styles.subTitle}>
                        Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
                    </Text>
                </View>

                <View style={styles.footer}>
                    <Button title="Começar" onPress={onPressButton} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20
    },
    header: {
        alignItems: 'center'
    },
    emoji: {
        fontSize: 120,
    },
    title: {
        fontSize: 22,
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.heading,
        lineHeight: 30,
        marginTop: 15,
    },
    subTitle: {
        fontFamily: fonts.text,
        textAlign: 'center',
        fontSize: 17,
        paddingVertical: 20,
        color: colors.heading,
    },
    footer: {
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 50
    },
});

export default Confirmation;
