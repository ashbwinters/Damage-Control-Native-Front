import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import SearchBar from '../components/SearchBar'
import SearchResults from '../containers/SearchResults'
import usePaintingsResults from '../hooks/usePaintingsResults';

export default function AdminScreen() {

    const styles = StyleSheet.create({
        background: {
            backgroundColor: 'azure',
            height: '100%'
        },
        textStyle: {}
    });

    const [artist, setArtist] = useState('')
    const [searchMetAPI, paintings] = usePaintingsResults()
    const [selectedPainting, setSelectedPainting] = useState({})
    

    const selectPainting = (painting) => {
        setSelectedPainting(painting)
    }
    console.log('selected painting title:', selectedPainting)
    
    return (
        <View style={styles.background}>
            <SearchBar
                asseccionNumber={artist}
                onSearchChange={setArtist}
                onSearchSubmit={() => searchMetAPI(artist)}
            />
            <SearchResults
                paintings={paintings}
                selectPainting={selectPainting}
            />
        </View>
    );
}
