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
    const [hasSearchResults, setHasSearchResults] = useState(false)
    const [selectedPainting, setSelectedPainting] = useState({})
    const [searchMetAPI, results] = useInitialResults()
    const [getLimitedPaintings, paintings] = usePaintingsResults()

    const handleArtistSearch = (artist) => {
        searchMetAPI(artist)
        setHasSearchResults(true)
    }

    const selectPainting = (painting) => {
        setSelectedPainting(painting)
    }

    hasSearchResults ? getLimitedPaintings(results) : null
    
    return (
        <View style={styles.background}>
            <SearchBar
                asseccionNumber={artist}
                onSearchChange={setArtist}
                onSearchSubmit={() => handleArtistSearch(artist)}
            />
            <SearchResults
                paintings={paintings}
                showMoreResults={getLimitedPaintings}
                selectPainting={selectPainting}
            />
        </View>
    );
}
