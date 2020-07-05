import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

function AdminScreen ({ navigation }) {
    
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
            <Button
                style={styles.buttonStyle}
                title="Search Paintings by Artist"
                onPress={() => {navigation.navigate('Search')}}
            />
            <MaterialCommunityIcons
                style={styles.buttonStyle}
                name="presentation-play"
                onPress={() => {navigation.navigate('Home')}}
            />
        </View>
    )
}
export default AdminScreen