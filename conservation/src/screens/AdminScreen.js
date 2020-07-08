import React, { useEffect, useContext } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import useHerokuGet from '../hooks/useHerokuGet'
import PaintingContext from '../context/PaintingContext'

function AdminScreen ({ navigation }) {

    const {data, changeSelectedPainting} = useContext(PaintingContext)
    const [searchHeroku, paintingData] = useHerokuGet()

    useEffect(() =>{
        searchHeroku(data.accessionNumber)
    })

    console.log(paintingData)
    
    return (
        <View style={styles.backgroundStyle}>
            <Button
                style={styles.buttonStyle}
                title="Search Paintings by Artist"
                onPress={() => {navigation.navigate('Search')}}
                />
            <MaterialCommunityIcons
                style={styles.buttonStyle}
                name="presentation-play"
                onPress={() => {navigation.navigate('Home')}}
                />
        </View>
    )
}
export default AdminScreen

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'darkslategrey',
        flex: 1
    },
    textStyle:{
        flex:95,
        fontSize: 48,
        alignSelf: 'center',
        color: 'darkgoldenrod'
    },
    buttonStyle: {
        alignSelf: "flex-end",
        flex: 5,
        fontSize: 32,
        color: 'darkgoldenrod',
        marginRight: 15
    }
})