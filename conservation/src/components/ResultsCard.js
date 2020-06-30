import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export default function ResultsCard( {painting} ) {

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
            <Text>{painting.primaryImage}</Text>
            <Button
                title='Select Artwork'
                onPress={() => console.log('You picked me!')}
            />
        </View>
    )
}