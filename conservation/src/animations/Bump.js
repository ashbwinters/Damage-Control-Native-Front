import React from 'react'
import { View, Text, StyleSheet, Animations, Image } from 'react-native'

export default function Bump ({paintingDetails}) {
    return <Image source={{uri: paintingDetails.image}} style={styles.imageStyle}/>
}
const styles = StyleSheet.create({
    imageStyle: {
        flex: 1,
        height: null,
        width: null,
        resizeMode: "contain"
    }
})