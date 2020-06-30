import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

export default function AdminScreen() {

    const styles = StyleSheet.create({
        background: {
            backgroundColor: 'azure',
            height: '100%'
        },
        textStyle: {}
    });

    const [accessionNumber, setAccessionNumber] = useState('')

    return (
        <View style={styles.background}>
            <Text>{accessionNumber}</Text>
            <SearchBar
                asseccionNumber={accessionNumber}
                onSearchChange={newNumber => setAccessionNumber(newNumber)}
                onSearchSubmit={() => console.log(accessionNumber)}
            />
        </View>
    );
}
