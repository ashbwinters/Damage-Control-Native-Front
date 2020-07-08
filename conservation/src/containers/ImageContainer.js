import React from 'react'
import { Image, Text, StyleSheet, View } from 'react-native'
import Breath from '../animations/Breath'
import Bump from '../animations/Bump'
import Flash from '../animations/Flash'
import Touch from '../animations/Touch'

function ImageContainer({ paintingDetails, effect }) {

    const showAnimation = (effect) => {
        switch(effect){
            case('touch'):
                return <Touch paintingDetails={paintingDetails}/>
            case('breath'):
                return <Breath paintingDetails={paintingDetails}/>
            case('bump'):
                return <Bump paintingDetails={paintingDetails}/>
            case('flash'):
                return <Flash paintingDetails={paintingDetails}/>
            default:
                return <Image source={{uri: paintingDetails.image}} style={styles.imageStyle}/>

        }
    }


    return (
        <>
            {showAnimation(effect)}
        </>
    )
}
export default ImageContainer

const styles = StyleSheet.create({
    imageStyle: {
        flex: 1,
        height: null,
        width: null,
        resizeMode: "contain"
    }
})
