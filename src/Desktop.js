import React, { useState, useEffect, useLayoutEffect } from 'react';
import './App.css';
import HeaderRow1 from './Components/HomePage/Header/HeaderRow1/HeaderRow1'
import HeaderRow2 from './Components/HomePage/Header/HeaderRow2/HeaderRow2'
import HeaderRow3 from './Components/HomePage/Header/HeaderRow3/HeaderRow3'
import HeaderRow4 from './Components/HomePage/Header/HeaderRow4/HeaderRow4'
import Banner1 from './Components/HomePage/Banner1/Banner1'
import Carousel1 from './Components/HomePage/Carousels/Carousel1/Carousel1'
import Promotion1 from './Components/HomePage/Promotion1/Promotion1'
import SpecialCarousel from './Components/HomePage/Carousels/SpecialCarousel/SpecialCarousel'
import Carousel2 from './Components/HomePage/Carousels/Carousel2/Carousel2'
import Categories from './Components/HomePage/Categories/Categories'
import MostWanted from './Components/HomePage/Carousels/MostWanted/MostWanted'
import Products from './Components/HomePage/FirstPageProducts/Products'
import Footer from './Components/HomePage/Footer/Footer'

function Desktop() {

    return (
        <div className="App">
            <header>
                <HeaderRow1 />
                <HeaderRow2 />
                <HeaderRow3 />
                <HeaderRow4 />
                <Banner1 />
            </header>
            <Carousel1 />
            <Promotion1 />
            <SpecialCarousel />
            <Carousel2 />
            <Categories />
            <MostWanted />
            <Products />
            <Footer />
        </div>
    );
}

export default Desktop;