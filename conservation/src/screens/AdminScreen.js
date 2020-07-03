import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { withNavigation } from "react-navigation"

function AdminScreen ({ navigation }) {

    const painting = navigation.getParam('painting')
    console.log(painting)
    const styles = StyleSheet.create({
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
        <View style={styles.backgroundStyle}>
            <Text style={styles.textStyle}>{painting.title}</Text>
            <Button
                style={styles.buttonStyle}
                title="Search Paintings by Artist"
                onPress={() => {navigation.navigate('Search')}}
            />
        </View>
    )
}
export default withNavigation(AdminScreen)