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





    const onSubmit = (e) => {
        e.preventDefault();
        fetch(
            `https://api-do-joao.herokuapp.com/find/type/${inputState}`
        )
            .then((resp) => resp.json())
            .then((resp) => {
                setSearchResult(resp);
            });
        history.push("/search");
    }



    return (
        <div className='header-row-2'>
            <img src={logo} alt='logo_electro_shopping'></img>
            
            <form onSubmit={onSubmit}>
                <input placeholder='What are you looking for ?' value={inputState} onChange={onChange} ></input>
                <i className="fas fa-search" onClick={onSubmit}></i>
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