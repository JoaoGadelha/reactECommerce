import React, { useState, useEffect, useLayoutEffect } from 'react';
import './App.css';
import Header from './ComponentsMobile/HomePage/Header/Header'
import AppAd from './ComponentsMobile/HomePage/AppAd/AppAd'
import ButtonsRow from './ComponentsMobile/HomePage/ButtonsRow/ButtonsRow'
import Banner1 from './ComponentsMobile/HomePage/Banner1/Banner1'
import MobileCarousel from './ComponentsMobile/HomePage/Carousels/MobileCarousel/MobileCarousel'
import Promotion1 from './ComponentsMobile/HomePage/Promotion1/Promotion1'
import Carousel2 from './ComponentsMobile/HomePage/Carousel2/Carousel2'
import Categories from './ComponentsMobile/HomePage/Categories/Categories'

function Tablet() {

    return (
        <div className="Tablet">
          <AppAd />
          <Header />
          <ButtonsRow />
          <Banner1 />
          <MobileCarousel />
          <Promotion1 />
          <Carousel2 />  
          <Categories />
        </div>
    );
}

export default Tablet;