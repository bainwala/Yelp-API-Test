import React, {} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from '../Components/ResultsDetail';
import {withNavigation} from 'react-navigation'

const ResultList = (props) => {
    if(!props.results.length) {
        return null
    }

    return (
        <View style={styles.container}>
            <Text style = {styles.title}>{props.title}</Text>
            <FlatList
            showsHorizontalScrollIndicator = {false}
            horizontal = {true}
            data = {props.results}
            keyExtractor = {(result) => result.id}
            renderItem = {({item}) => {
                return (
                    <TouchableOpacity onPress = {() => props.navigation.navigate('ResultsShow', {id: item.id})}>
                        <ResultsDetail result = {item}/>
                    </TouchableOpacity>
                )
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },

    container: {
        marginBottom: 10
    }
})

export default withNavigation(ResultList);