import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import ResultsCard from '../components/ResultsCard'

export default function SearchResults( {paintings, showMoreResults} ) {

    const styles = StyleSheet.create({
        textStyle: {

        },
        listStyle: {

        }
    })
    return (
        <View>
            <Text>Results Go Here</Text>
            <ResultsCard painting={paintings}/>
            <Button
                title='Next'
                onPress={() => console.log('more results')}
            />
        </View>
    )
}