import React, {useState} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {FontAwesome} from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onTermSubmitted}) => {
    
    return (
        <View style={styles.backgroundStyle}>
            <FontAwesome name = "search" style = {styles.iconStyle}/>
            <TextInput 
            autoCapitalize = "none"
            autoCorrect = {false}
            placeholder="Search" 
            style={styles.textStyle}
            value = {term}
            onChangeText = {onTermChange} 
            onEndEditing = {onTermSubmitted}   
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#b9babd',
        height: 40,
        borderRadius:5,
        marginHorizontal: 15,
        marginTop: 10,
        flexDirection: 'row',
        marginBottom: 10
    },

    textStyle: {
        borderColor: 'black',
        flex: 1,
        fontSize: 20
    },

    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default SearchBar;