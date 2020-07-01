import React from 'react'
import { Text, View, StyleSheet, Button, FlatList } from 'react-native'
import ResultsCard from '../components/ResultsCard'

export default function SearchResults( {paintings, selectPainting} ) {

    const styles = StyleSheet.create({
        textStyle: {
            fontSize: 24,
            alignSelf: 'center'
        },
        listStyle: {

        }
    })

    return (
        <View>
            <FlatList
                data={paintings}
                keyExtractor={painting => painting.accessionNumber}
                renderItem={ ({item}) => {
                    return <ResultsCard painting={item} selectPainting={selectPainting}/>
                }}
            />
        </View>
    )
}