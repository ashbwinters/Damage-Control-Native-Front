import React from 'react'
import { Text, View, StyleSheet, Button, Image } from 'react-native'

export default function ResultsCard( {painting, selectPainting} ) {

    const styles = StyleSheet.create({
        textStyle: {

        }
    })
    console.log(painting.objectID)
    return (
        <View>
            <Text>{painting.title}</Text>
            <Text>{painting.artistDisplayName}</Text>
            <Text>{painting.accessionNumber}</Text>
            <Button
                title='Select Artwork'
                onPress={() => selectPainting(painting)}
            />
        </View>
    )
}