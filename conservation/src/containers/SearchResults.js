import React from 'react'
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { withNavigation } from "react-navigation";
import ResultsCard from '../components/ResultsCard'

function SearchResults( {paintings, navigation} ) {

    const styles = StyleSheet.create({
        textStyle: {}
    })

    return (
        <View>
            <FlatList
                data={paintings}
                keyExtractor={painting => painting.accessionNumber}
                renderItem={ ({item}) => {
                    return (
                    <TouchableOpacity onPress={() => {navigation.navigate('Admin', {painting: item})}}>
                        <ResultsCard painting={item} />
                    </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}
export default withNavigation(SearchResults)