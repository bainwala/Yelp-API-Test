import {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errMessage, setErrMessage] = useState("")

    const searchAPI = async (searchTerm) => {
        try {
            const res = await yelp.get('/search', {
                params:{
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(res.data.businesses)
        } catch (err) {
            setErrMessage("Something Went Wrong!")
        }
    }

    useEffect(() => {
        searchAPI('pasta');
    }, [])

    return [searchAPI, results, errMessage]
}