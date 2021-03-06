import React, { useState, useEffect, useLayoutEffect } from 'react';
import './App.css';
import Homepage from './Components/HomePage/HomePage'
import SearchResult from './Components/SearchResultPage/SearchResult'
import ProductPage from './Components/ProductPage/ProductPage'
import HeaderRow1 from './Components/Common/Header/HeaderRow1/HeaderRow1'
import HeaderRow2 from './Components/Common/Header/HeaderRow2/HeaderRow2'
import HeaderRow3 from './Components/Common/Header/HeaderRow3/HeaderRow3'
import HeaderRow4 from './Components/Common/Header/HeaderRow4/HeaderRow4'
import ShopCartPage from './Components/ShopCartPage/ShopCartPage'
import RegisterPage from './Components/RegisterPage/RegisterPage'
import LoginPage from './Components/LoginPage/LoginPage'
import Footer from './Components/Common/Footer/Footer'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Desktop() {

    return (
        <div className="App">
            <Switch>
                <Route path='/shopcart' component={ShopCartPage}></Route>    
                <Route path='/signup' component={RegisterPage}></Route>
                <Route path='/login' component={LoginPage}></Route>
                <Route path='/'>
                    <header>
                        <HeaderRow1 />
                        <HeaderRow2 />
                        <HeaderRow3 />
                        <HeaderRow4 />
                    </header>
                    <Switch>
                        <Route path='/product/:id' component={ProductPage}>
                        </Route>
                        <Route path='/search/' component={SearchResult}>
                        </Route>
                        <Route path='/'>
                            <Homepage />
                        </Route>
                    </Switch>
                    <Footer />
                </Route>
            </Switch>
        </div>
    );
}

export default Desktop;