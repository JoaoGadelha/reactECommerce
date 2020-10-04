import React, { useContext, useEffect } from 'react'
import { Context } from '../../Context'
import Products from './Products/Products'


const SearchResult = () => {

    let {searchResult} = useContext(Context);
    return (
        <div className='search-result-desktop'>
        <Products searchResult = {searchResult}/>
        </div>
    )

}

export default SearchResult