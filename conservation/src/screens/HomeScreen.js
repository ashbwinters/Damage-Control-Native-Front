import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function HomeScreen ({ navigation }) {

    const sytles = StyleSheet.create({
        textStyle: {

        }
    })
    return (
        <View>
            <Text>Home Screen</Text>
            <Button
                title='Admin'
                onPress={ () => navigation.navigate('Admin')}
            />
        </View>
    )
}