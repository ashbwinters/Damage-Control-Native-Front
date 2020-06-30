import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function SearchBar({ artist, onSearchChange, onSearchSubmit }) {

    const styles = StyleSheet.create({
        inputStyle: {
            flex: 1,
            fontSize: 24
        },
        iconStyle: {
            fontSize: 42,
            color: 'grey',
            alignSelf: 'center'
        },
        backgroundStyle: { 
            backgroundColor: 'floralwhite',
            height: 50,
            borderRadius: 15,
            marginHorizontal: 15,
            flexDirection: 'row'
        }
    })

    return (
        <View style={styles.backgroundStyle}>
            <MaterialCommunityIcons
                style={styles.iconStyle}
                name="image-search-outline"
            />
            <TextInput
                style={styles.inputStyle}
                placeholder="Search by Artist's Full Name"
                value={artist}
                onChangeText={onSearchChange}
                onEndEditing={(value) => onSearchSubmit(value)}
            />
        </View>
    )
}