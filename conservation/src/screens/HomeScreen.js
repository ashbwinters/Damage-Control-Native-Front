import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import PaintingContext from '../context/PaintingContext'
import ImageContainer from '../containers/ImageContainer'
import InteractionsContainer from '../containers/InteractionsContainer'

function HomeScreen ({ navigation }) {

    const { data } = useContext(PaintingContext)
    const [activeInteraction, setActiveInteraction] = useState(null)
    
    const changeActiveInteraction = (newInteraction) => {
        setActiveInteraction(newInteraction)
    }
    return (
        <View style={styles.backgroundStyle}>
            <ImageContainer paintingDetails={data} effect={activeInteraction}/>
            <View style={styles.panelStyle}>
                <InteractionsContainer
                    activeInteraction={activeInteraction}
                    activate={changeActiveInteraction}
                />
                <MaterialCommunityIcons
                    name='restart'
                    style={styles.resetStyle}
                    onPress={() => changeActiveInteraction(null)}
                />
                <MaterialCommunityIcons
                    name="account-badge-horizontal"
                    style={styles.buttonStyle}
                    onPress={ () => navigation.navigate('Admin')}
                />
            </View>
        </View>
    )
}
export default HomeScreen

const styles = StyleSheet.create({
    backgroundStyle: {
        flexDirection: 'row',
        flex: 1
    },
    textStyle:{
        fontSize: 24,
        alignSelf: 'center',
        flex: 5
    },
    resetStyle: {
        alignSelf: 'center',
        fontSize: 42,
        color: 'darkgoldenrod',
        marginVertical: 20,
        marginHorizontal: 20
    },
    buttonStyle: {
        alignSelf: "flex-end",
        fontSize: 30,
        color: 'darkgoldenrod',
        marginVertical: 15,
        marginHorizontal: 15
    },
    canvasStyle: {
        backgroundColor: 'darkgoldenrod',
        flex: 75
    },
    panelStyle: {
        flex: 25,
        backgroundColor: 'darkslategrey',
        flexDirection: 'column',
        justifyContent: "space-between"
    }
})