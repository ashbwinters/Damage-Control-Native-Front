import React from 'react'
import { View, Text, StyleSheet, Animations, Image } from 'react-native'

export default function Touch ({ paintingDetails }) {

        return (
            <Image 
              source={{uri: `https://www.transparenttextures.com/patterns/grunge-wall.png`}}
              style={styles.overlay}
            />
        )
}
const styles = StyleSheet.create({
    overlay: {
        resizeMode: "cover",
        backgroundColor: '#999471',
        height: null,
        width:null,
        flex:1
    }
})