import React, { useContext, useEffect } from 'react'
import { Context } from '../../Context'
import Products from './Products/Products'


const SearchResult = () => {

    let [searchResult, setSearchResult, currentProduct, setCurrentProduct, apiKey, flag, setFlag] = useContext(Context);

    useEffect(() => {
        console.log(searchResult);
    }, [searchResult]);

    return (
        <div className='search-result-desktop'>
        <Products searchResult = {searchResult}/>
        </div>
    )

}

export default SearchResult