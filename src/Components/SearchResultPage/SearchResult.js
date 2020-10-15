import React, { useContext, useEffect } from 'react'
import { Context } from '../../Context'
import Products from './Products/Products'


const SearchResult = () => {

    let { searchResult } = useContext(Context);
    if (searchResult.length !== 0 && Array.isArray(searchResult)) {
        return (
            <div className='search-result-desktop'>
                <Products searchResult={searchResult} />
            </div>
        )
    } else {
        return (
            <div className='products-container'>
                <h1>Search Results</h1>
                <h2 style={{ textAlign: 'center', fontSize: '30px' }}>Your search has returned no results</h2>
            </div>
        );
    }

}

export default SearchResult