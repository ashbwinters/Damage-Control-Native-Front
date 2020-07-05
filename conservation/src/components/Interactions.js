import React from 'react'
import { Text, Button, View, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

function Interactions ({ iconName, pressAction, interaction}) {

    styles = StyleSheet.create({
        buttonStyle: {
            alignSelf: "flex-end",
            fontSize: 32,
            color: 'darkgoldenrod',
            marginRight: 15
        }
    })

    return (
            <MaterialCommunityIcons
                name={iconName}
                style={styles.buttonStyle}
                onPress={ () => pressAction(interaction)}
            />
    )
}
export default Interactions