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
                return <Touch paintingDetails={paintingDetails} isActive={true} />
            case('breath'):
                return <Breath paintingDetails={paintingDetails} isActive={true} />
            case('bump'):
                return <Bump paintingDetails={paintingDetails} isActive={true} />
            case('flash'):
                return <Flash paintingDetails={paintingDetails} isActive={true} />
            default:
                return null

        }
    }


    return (
        <View style={styles.containerStyle}>
            <Image source={{uri: paintingDetails.image}} style={styles.imageStyle}/>
            {showAnimation(effect)}
        </View>
    )
}
export default ImageContainer

const styles = StyleSheet.create({
    imageStyle: {
        flex: 1,
        height: null,
        width: null,
        resizeMode: "cover",
        alignItems: 'center'
    },
    containerStyle: {
        flex: 75,
        borderColor: 'darkgoldenrod',
        borderWidth: 15,
    }
})
