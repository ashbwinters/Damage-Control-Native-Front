import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import SearchBar from '../components/SearchBar'
import metMuseum from '../api/metMuseum';

export default function AdminScreen() {

    const styles = StyleSheet.create({
        background: {
            backgroundColor: 'azure',
            height: '100%'
        },
        textStyle: {}
    });

    const [artist, setArtist] = useState('')
    const [results, setResults] = useState([])
    const [paintings, setPaintings] = useState([])

    const searchMetAPI = async () => {
            const response = await metMuseum.get('/search', {
                params: {
                    hasImages: true,
                    artistOrCultureRequest: true,
                    q: artist
                }
            })
            setResults(response.data.objectIDs)
    }

    const getLimitedPaintings = async () => {
            const response = await metMuseum.get(`/objects/${results.first}`)
            setPaintings(...paintings, response.data)

    } 

    return (
        <View style={styles.background}>
            <SearchBar
                asseccionNumber={artist}
                onSearchChange={setArtist}
                onSearchSubmit={searchMetAPI}
            />
            <Text>{results.length} number of works for {artist}</Text>
        </View>
    );
}
