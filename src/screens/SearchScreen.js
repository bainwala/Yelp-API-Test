import React, {useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import SearchBar from './Components/SearchBar';
import useResults from './hooks/useResults';
import ResultList from './Components/ResultList';

const SearchScreen = () => {
    const [term, setTerm] = useState("");
    const [searchAPI, results, errMessage] = useResults()

    const filterResultsByPrice = (price) => {
        return results.filter((result) => {
            return (result.price === price);
        })
    }

    return (
        <>
            <SearchBar 
            term = {term} 
            onTermChange = {setTerm}
            onTermSubmitted = {() => searchAPI(term)}   
            />
            {errMessage? <Text>{errMessage}</Text> : null}
            <ScrollView>
            <ResultList 
            title = "Cost Effective"
            results = {filterResultsByPrice('$')}
            
            />
            <ResultList 
            title = "Bit Pricier"
            results = {filterResultsByPrice('$$')}
            
            />
            <ResultList 
            title = "Big Spender"
            results = {filterResultsByPrice('$$$')}
            
            />
            </ScrollView>
        </>
    )
}

export default SearchScreen;