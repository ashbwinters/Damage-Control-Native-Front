import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import ResultsCard from '../components/ResultsCard'

export default function SearchResults( {paintings, showMoreResults, selectPainting} ) {

    const styles = StyleSheet.create({
        textStyle: {

        },
        listStyle: {

        }
    })
    console.log(paintings)
    return (
        <View>
            <Text>Results Go Here</Text>
            <ResultsCard painting={paintings} selectPainting={selectPainting}/>
            <Button
                title='Next'
                onPress={() => console.log('more results')}
            />
        </View>
    )
}