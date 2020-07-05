import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import SearchResults from '../containers/SearchResults'
import usePaintingsResults from '../hooks/usePaintingsResults';

function SearchScreen({ navigation }) {

    const styles = StyleSheet.create({
        background: {
            backgroundColor: 'azure',
            height: '100%'
        },
        textStyle: {}
    });

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
    );
}
export default SearchScreen