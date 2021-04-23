import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Platform, Alert, ScrollView } from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import { useNavigation, useRoute } from '@react-navigation/core';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import {format, isBefore} from 'date-fns';

import { PlantProps, savePlant } from '../libs/storage';

import Button from '../components/Button';

import waterdrop from '../assets/waterdrop.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface Params {
    plant: PlantProps
}

function PlantSave() {
    const navigation = useNavigation();
    const route = useRoute();
    const { plant } = route.params as Params; 

    const [selectedDatePicker, setSelectedDatePicker ] = useState(new Date());
    const [showDatePicker, setShowDatePicker ] = useState(Platform.OS === 'ios');

    function handleChangeTime(event: Event, dateTime?: Date) {
        if (Platform.OS === 'android') {
            setShowDatePicker(!showDatePicker);
        }

        if (dateTime && isBefore(dateTime, new Date())) {
            setSelectedDatePicker(new Date());
            return Alert.alert('Escolha uma hora no futuro!');
        }

        if (dateTime) setSelectedDatePicker(dateTime);
    }

    async function handleSave() {
        try {
            await savePlant ({...plant, dateTimeNotification: selectedDatePicker });

            navigation.navigate('Confirmation', {
                title: 'Tudo certo',
                subtitle: 'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com muito cuidado.',
                buttonTitle: 'Muito Obrigado :D',
                icon: 'hug',
                nextScreen: 'MyPlants',
            });

        } catch {
            Alert.alert('Error!', 'Não foi possível salvar a planta.');
        }
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}
        >
            <View style={styles.container}>
                <View style={styles.plantInfo}>
                    <SvgFromUri
                        uri={plant.photo}
                        height={150}
                        width={150}
                    />

                    <Text style={styles.plantName}>
                        {plant.name}
                    </Text>

                    <Text style={styles.plantAbout}>
                        {plant.about}
                    </Text>
                </View>

                <View style={styles.controller}>
                    <View style={styles.tipContainer}>
                        <Image
                            source={waterdrop}
                            style={styles.tipImage}
                        />

                        <Text style={styles.tipText}>
                            {plant.water_tips}
                        </Text>
                    </View>

                    <Text style={styles.alertLabel}>
                        Escolha o melhor horário para ser lembrado:
                    </Text>

                    {
                        Platform.OS === 'android' &&
                        <Button
                            title={`Escolher o horário ${format(selectedDatePicker, 'HH:mm')}`}
                            onPress={() => setShowDatePicker(true)}
                            style={styles.timeButton}
                        /> 
                    }
                    {showDatePicker && (
                        <DateTimePicker
                            value={selectedDatePicker}
                            mode="time"
                            display="spinner"
                            onChange={ handleChangeTime }
                            is24Hour
                        />
                    )}

                    <Button
                        title="Cadastrar planta"
                        onPress={handleSave}
                        style={styles.button}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.shape,
    },
    plantInfo: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.shape,
    },
    controller: {
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingVertical: 20,
        alignItems: 'center',
    },
    plantName: {
        fontFamily: fonts.heading,
        fontSize: 24,
        color: colors.heading,
        marginTop: 15
    },
    plantAbout: {
        textAlign: 'center',
        fontFamily: fonts.text,
        color: colors.heading,
        fontSize: 17,
        marginTop: 10,
    },
    tipContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.blue_light,
        padding: 20,
        borderRadius: 20,
        position: 'relative',
        bottom: 60
    },
    tipImage: {
        width: 56,
        height: 56,
    },
    tipText: {
        flex: 1,
        marginLeft: 20,
        fontFamily: fonts.text,
        color: colors.blue,
        fontSize: 17,
        textAlign: 'justify'
    },
    alertLabel: {
        textAlign: 'center',
        fontFamily: fonts.complement,
        color: colors.heading,
        fontSize: 12,
        marginBottom: 5
    },
    timeButton: {
        marginVertical: 10,
        width: '100%',
        backgroundColor: colors.blue
    },
    button: {
        width: '100%'
    }
});

export default PlantSave;