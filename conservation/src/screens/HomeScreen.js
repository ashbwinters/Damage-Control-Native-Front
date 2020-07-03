import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { withNavigation } from "react-navigation";

function HomeScreen ({ navigation }) {

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
export default withNavigation(HomeScreen)