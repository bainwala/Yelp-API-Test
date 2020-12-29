import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import yelp from './api/yelp'

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null)
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const res = await yelp.get(`/${id}`);
        setResult(res.data)
    }

    useEffect(() => {
        getResult(id);
    }, [])

    if(!result){
        return null;
    }

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList 
            data = {result.photos}
            keyExtractor = {(photo) => photo}
            renderItem = {({item}) => {
                return <Image source={{uri:item}} style = {styles.image}/>
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 150
    }
})

export default ResultsShowScreen;