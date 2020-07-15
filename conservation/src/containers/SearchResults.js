import React, { useContext } from 'react'
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import ResultsCard from '../components/ResultsCard'
import PaintingContext from '../context/PaintingContext'

function SearchResults( {navigation, paintings} ) {

    
    const {changeSelectedPainting} = useContext(PaintingContext)
    
    const handleSelect = (item) => {
        changeSelectedPainting(item)
        navigation.navigate('Admin')
    }
    return (
        <View>
            <FlatList
                data={paintings}
                keyExtractor={painting => painting.accessionNumber}
                renderItem={ ({item}) => {
                    return (
                        <TouchableOpacity onPress={() => handleSelect(item)}>
                        <ResultsCard painting={item} />
                    </TouchableOpacity>
                    )
                }}
                />
        </View>
    )
}
export default SearchResults

const styles = StyleSheet.create({
    textStyle: {}
})