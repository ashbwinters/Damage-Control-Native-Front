import React from 'react'
import { Image, Text, StyleSheet, View } from "react-native";


function ImageContainer({ paintingDetails }) {

    const styles = StyleSheet.create({
        imageStyle: {
            flex: 1,
            height: null,
            width: null,
            resizeMode: "contain"
        }
    })
    return (
        <Image source={{uri: paintingDetails.image}} style={styles.imageStyle}/>
    )
}
export default ImageContainer