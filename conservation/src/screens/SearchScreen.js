import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import SearchResults from '../containers/SearchResults'
import usePaintingsResults from '../hooks/usePaintingsResults'

export default function SearchScreen({ navigation }) {
    
    const [artist, setArtist] = useState('')
    const [searchMetAPI, paintings] = usePaintingsResults()    
    
    return (
        <View style={styles.background}>
            <SearchBar
                asseccionNumber={artist}
                onSearchChange={setArtist}
                onSearchSubmit={() => searchMetAPI(artist)}
            />
            <SearchResults paintings={paintings} navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'darkslategrey',
        height: '100%'
    }
})