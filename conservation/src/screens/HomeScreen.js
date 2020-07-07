import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import PaintingContext from '../context/PaintingContext'
import ImageContainer from '../containers/ImageContainer'
import InteractionsContainer from '../containers/InteractionsContainer'

const HomeScreen = ({ navigation }) => {

    const { data, changeSelectedPainting } = useContext(PaintingContext)
    
    return (
        <View style={styles.backgroundStyle}>
            <View style={styles.canvasStyle}>
                <ImageContainer paintingDetails={data} />
            </View>
            <View style={styles.panelStyle}>
                <InteractionsContainer/>
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

        position: 'absolute',
        alignSelf: "flex-end",
        fontSize: 24,
        color: 'darkgoldenrod',
        marginVertical: 15
    },
    canvasStyle: {
        flex: 75
    },
    panelStyle: {
        flex: 25,
        backgroundColor: 'darkslategrey',
        flexDirection: 'column-reverse',
        justifyContent: "space-between"
    }
})
export default HomeScreen