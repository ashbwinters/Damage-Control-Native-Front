import React, { useEffect, useContext } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import useHerokuGet from '../hooks/useHerokuGet'
import PaintingContext from '../context/PaintingContext'

function AdminScreen ({ navigation }) {

    const {data, changeSelectedPainting} = useContext(PaintingContext)
    const [searchHeroku, paintingData] = useHerokuGet()

    // searchHeroku(data.accessionNumber)
    return (
        <View style={styles.backgroundStyle}>
            <View style={styles.footerStyle}>
                <TouchableOpacity onPress={() => {navigation.navigate('Search')}}>
                    <Text style={styles.textStyle}>Search Paintings by Artist</Text>
                </TouchableOpacity >
                <MaterialCommunityIcons
                    style={styles.buttonStyle}
                    name="presentation-play"
                    onPress={() => {navigation.navigate('Home')}}
                    />
            </View>
            <View style={styles.dataStyle}>
                <View style={styles.sectionStyle}>
                    <View>
                        <Text style={styles.textStyle}>Artist: {data.artist}</Text>
                        <Text style={styles.textStyle}>Accession Number: {data.accessionNumber}</Text>
                    </View>
                    <View>
                        <Text style={styles.textStyle}>Title: {data.title}</Text>
                        <Text style={styles.textStyle}>{data.medium}, {data.date}</Text>
                    </View>
                </View>
                <View style={styles.sectionStyle}>
                    <View>
                        <Text style={styles.textStyle}>Recorded Touches: </Text>
                        <Text style={styles.textStyle}>Recorderd Breaths: </Text>
                    </View>
                    <View>
                        <Text style={styles.textStyle}>Recorded Bumps: </Text>
                        <Text style={styles.textStyle}>Recorded Flashes: </Text>
                    </View>
                </View>
                <View style={styles.sectionStyle}>
                    <Text style={styles.textStyle}>Art Tamper Reports: </Text>
                </View>
            </View>
        </View>
    )
}
export default AdminScreen

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'darkslategrey',
        flex: 1,
    },
    sectionStyle: {
        flex: 5,
        marginVertical: 25,
        marginHorizontal: 25,
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    dataStyle: {
        flex: 90,
        justifyContent: 'center',
        alignContent: 'center'
    },
    footerStyle: {
        flex: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'flex-end',
        marginVertical: 15,
        marginHorizontal: 15
    },
    textStyle:{
        fontSize: 28,
        color: 'darkgoldenrod',
        marginHorizontal: 25,
        marginVertical: 10
    },
    buttonStyle: {
        fontSize: 32,
        color: 'darkgoldenrod',
        alignSelf: "flex-start"    
    }
})