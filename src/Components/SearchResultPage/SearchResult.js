import React, { useContext, useEffect } from 'react'
import { Context } from '../../Context'
import Products from './Products/Products'
import loadingGif from '../../loading.gif'
import styles from './SearchResult.module.css'


const SearchResult = () => {

    let { searchResult, isLoading } = useContext(Context);
    console.log(isLoading);
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
                {isLoading ?  <img src={loadingGif} className={styles.loadingGif}></img> : <h2 className={styles.emptyMsg}>Your search has returned no results</h2>}
            </div>
        );
    }

}

export default SearchResult