import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function HomeScreen ({ navigation }) {

    const sytles = StyleSheet.create({
        backgroundStyle: {
            backgroundColor: 'azure',
            flex: 1
        },
        textStyle:{
            flex:95,
            fontSize: 48,
            alignSelf: 'center'
        },
        buttonStyle: {
            alignSelf: "flex-end",
            flex: 5,
            fontSize: 32,
            color: 'grey',
            marginRight: 15
        }
    })
    return (
        <View style={sytles.backgroundStyle}>
            <Text style={sytles.textStyle}>Welcome!</Text>
            <MaterialIcons
                name="person-outline"
                style={sytles.buttonStyle}
                onPress={ () => navigation.navigate('Admin')}
            />
        </View>
    )
}