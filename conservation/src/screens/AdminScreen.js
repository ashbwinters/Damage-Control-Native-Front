import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import SearchBar from '../components/SearchBar'
import useInitialResults from '../hooks/useInitialResults'
import usePaintingsResults from '../hooks/usePaintingsResults'
import SearchResults from '../containers/SearchResults'

export default function AdminScreen() {

    const styles = StyleSheet.create({
        background: {
            backgroundColor: 'azure',
            height: '100%'
        },
        textStyle: {}
    });

    const [artist, setArtist] = useState('')
    const [searchMetAPI, results] = useInitialResults()
    const [getLimitedPaintings, paintings] = usePaintingsResults()

    getLimitedPaintings(results)
    console.log(results[1])

    return (
        <View style={styles.background}>
            <SearchBar
                asseccionNumber={artist}
                onSearchChange={setArtist}
                onSearchSubmit={() => searchMetAPI(artist)}
            />
            <Text>{results.length} number of works for {artist}</Text>
            <SearchResults paintings={paintings} showMoreResults={getLimitedPaintings}/>
        </View>
    );
}
