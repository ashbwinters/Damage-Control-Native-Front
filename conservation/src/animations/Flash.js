import React from 'react'
import { View, Text, StyleSheet, Animated, Image } from 'react-native'

export default function Flash ({paintingDetails, isActive}) {

    const animatedValue = new Animated.Value(0)

    if (isActive) {
        Animated.timing(animatedValue, { toValue: 1, duration: 3000, useNativeDriver: false }).start()
    }
  
    const imageStyles = [
        styles.overlay,
        {opacity: animatedValue}
    ]

    return (
        <View style={styles.outerOverlay}>
            <Animated.Image 
              source={{uri: `https://www.transparenttextures.com/patterns/mooning.png`}}
              style={imageStyles}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    outerOverlay:{
        position: 'absolute',
        flex:1,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    },
    overlay: {
        tintColor: 'white',
        height: '100%',
        width:'100%',
        flex:1,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }
})