import React, { useState, useContext, useEffect } from 'react'
import logo from './HeaderRow2_img/logo.svg';
import './HeaderRow2.css'
import { Context } from '../../../../Context'
import { useHistory } from "react-router-dom";



const HeaderRow2 = () => {

    let [searchResult, setSearchResult, currentProduct, setCurrentProduct, apiKey] = useContext(Context);
    let [inputState, setInputState] = useState('');
    const history = useHistory();
    let [apiResponse, setApiResponse] = useState({});
    let processedApiResponse = [];
    let count = 0;

    const onChange = (e) => {
        e.preventDefault();
        setInputState(e.target.value);
    }

    useEffect(() => {
        makeSearchResult();
    }, [apiResponse]);

    const onSubmit = (e) => {
        e.preventDefault();
        fetch(
            `https://api.rainforestapi.com/request?api_key=${apiKey}&type=search&amazon_domain=amazon.com&search_term=${inputState}&sort_by=price_high_to_low`
        )
            .then((resp) => resp.json())
            .then((resp) => {
                setApiResponse(resp);
                console.log(apiResponse)
            });
    }

    const makeSearchResult = () => {
        if (!(Object.keys(apiResponse).length === 0 && apiResponse.constructor === Object)) {
            count = 0;
            for (let i = 0; i < apiResponse.search_results.length; i++) {
                if ((apiResponse.search_results[i].hasOwnProperty('price'))) {
                    if ((apiResponse.search_results[i].hasOwnProperty('title') )) {
                        if ((apiResponse.search_results[i].hasOwnProperty('image') )) {
                            if ((apiResponse.search_results[i].hasOwnProperty('asin') )) {
                                processedApiResponse[count] = apiResponse.search_results[count];
                                count++;
                            }
                        }
                    }
                }
            }
            setSearchResult(processedApiResponse);
        }
        console.log(searchResult);
    }

    return ( 
        <div className='header-row-2'>
            <img src={logo} alt='logo_electro_shopping'></img>
            {!(Object.keys(searchResult).length === 0 && searchResult.constructor === Object)?<h1>Cheio</h1>:<h1>Vazio</h1> }
            
            <form onSubmit={onSubmit}>
                <input placeholder='What are you looking for ?' value={inputState} onChange={onChange} ></input>
                <i className="fas fa-search" onClick={() => {
                    history.push("/search");
                }}></i>
            </form>
            <span>
                <i className="fas fa-user"></i>
                <strong>
                    <a href='www.google.com'>Log In or Sign up</a>
                </strong>
                <span>
                    <a href='www.google.com'>To see your products</a>
                </span>
            </span>
            <i className="fas fa-shopping-cart"></i>
        </div>
    )
}

export default HeaderRow2;