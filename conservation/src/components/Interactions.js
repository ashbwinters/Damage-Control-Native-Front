import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

function Interactions ({interaction, changeStatus}) {

    return (
        <View style={styles.interactionStyle}>
            <MaterialCommunityIcons
                name={interaction.iconName}
                style={styles.buttonStyle}
                onPress={ () => changeStatus(interaction.id)}
            />
        </View>
    )
}
export default Interactions

styles = StyleSheet.create({
    buttonStyle: {
        alignSelf: "flex-end",
        fontSize: 32,
        color: 'darkgoldenrod',
        marginRight: 15
    },
    interactionStyle: {
        justifyContent: 'space-between',
        alignSelf:'flex-start',
        marginHorizontal: 15,
        marginVertical: 15,
        marginBottom: 50
    },
    showStyle: {
        alignSelf: 'flex-start'
    }
})