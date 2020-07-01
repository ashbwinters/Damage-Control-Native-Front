import React from 'react'
import { Text, View, StyleSheet, Button, Image } from 'react-native'

export default function ResultsCard( {painting, selectPainting} ) {

    const styles = StyleSheet.create({
        textStyle: {
            fontSize: 18,
            color: 'grey'
        },
        listItemStyle:{
            flexDirection:"row",
            borderRadius: 25,
            marginHorizontal: 25,
            marginVertical: 20
        },
        imageStyle: {
            width: 200,
            height: 200,
            borderRadius: 5,
            marginHorizontal: 15
        }
    })
    return (
        <View style={styles.listItemStyle}>
            <View>
                <Image style={styles.imageStyle} source={{uri: painting.image}}/>
                <Button
                    title='Select Artwork'
                    onPress={() => selectPainting(painting)}
                />
            </View>
            <View>
               <Text style={styles.textStyle}>Title: {painting.title}</Text>
                <Text style={styles.textStyle}>Artist: {painting.artist}</Text>
                <Text style={styles.textStyle}>Accession Number: {painting.accessionNumber}</Text>
            </View>
        </View>
    )
}