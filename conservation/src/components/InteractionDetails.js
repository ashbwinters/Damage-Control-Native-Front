import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen'

function InteractionDetails ({ interaction}) {
    return (
        <View>
            <Text style={styles.headerStyle}>{interaction.id}</Text>
            <Text style={styles.textStyle}>{interaction.damage}</Text>
            <Text style={styles.textStyle}>{interaction.behavior}</Text>
        </View>
    )
}
export default InteractionDetails

const styles = StyleSheet.create({
    headerStyle: {
        color: 'darkgoldenrod',
        fontSize: 26,
        marginTop: 25
    },
    textStyle: {
        color: 'darkgoldenrod',
        fontSize: 18,
        flex: 1,
        marginTop: 25
    }
})