import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import PaintingContext from '../context/PaintingContext'
import ImageContainer from '../containers/ImageContainer'
import Interactions from '../components/Interactions'

const HomeScreen = ({ navigation }) => {

    const { data, changeSelectedPainting } = useContext(PaintingContext)
    const handleInteraction = (interaction) => {
        console.log(`Don't ${interaction} me!`)
    }
    
    return (
        <View style={styles.backgroundStyle}>
            <View style={styles.canvasStyle}>
                <ImageContainer paintingDetails={data} />
            </View>
            <View style={styles.panelStyle}>
                <Interactions iconName="fingerprint" pressAction={handleInteraction} interaction={'touch'} />
                <Interactions iconName="weather-windy" pressAction={handleInteraction} interaction={'breath on'} />
                <Interactions iconName="handball" pressAction={handleInteraction} interaction={'bump'} />
                <Interactions iconName="flash" pressAction={handleInteraction} interaction={'flash'} />


                <MaterialCommunityIcons
                    name="account-badge-horizontal"
                    style={styles.buttonStyle}
                    onPress={ () => navigation.navigate('Admin')}
                    />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'darkgoldenrod',
        flex: 1,
        flexDirection: 'row'
    },
    textStyle:{
        fontSize: 24,
        alignSelf: 'center',
        flex: 5
    },
    buttonStyle: {
        alignSelf: "flex-end",
        fontSize: 32,
        color: 'darkgoldenrod',
        marginRight: 15
    },
    canvasStyle: {
        flex: 75
    },
    panelStyle: {
        flex: 25,
        backgroundColor: 'darkslategrey',
        flexDirection: 'column',
        justifyContent: 'flex-end'
    }
})
export default HomeScreen