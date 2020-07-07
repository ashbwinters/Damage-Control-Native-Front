import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

function Interactions ({interaction, changeStatus}) {

    styles = StyleSheet.create({
        buttonStyle: {
            alignSelf: "flex-end",
            fontSize: 32,
            color: 'darkgoldenrod',
            marginRight: 15
        },
        textStyle: {
            color: 'darkgoldenrod',
            fontSize: 18,
            flex: 1,
            marginTop: 25
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
    return (
        <View style={styles.interactionStyle}>
            {!interaction.buttonStatus ? null :
                <MaterialCommunityIcons
                    name={interaction.iconName}
                    style={styles.buttonStyle}
                    onPress={ () => changeStatus(interaction.id)}
                />
            }
            {!interaction.textStatus ? null : 
                <View style={!interaction.textStatus ? null : styles.showStyle}>
                    <Text style={styles.textStyle}>{interaction.damage}</Text>
                    <Text style={styles.textStyle}>{interaction.behavior}</Text>
                </View>
            }
        </View>
    )
}
export default Interactions