import React, { useState, useEffect, useLayoutEffect } from 'react';
import './App.css';
import Header from './ComponentsMobile/HomePage/Header/Header'
import AppAd from './ComponentsMobile/HomePage/AppAd/AppAd'
import ButtonsRow from './ComponentsMobile/HomePage/ButtonsRow/ButtonsRow'
import Banner1 from './ComponentsMobile/HomePage/Banner1/Banner1'
import MobileCarousel from './ComponentsMobile/HomePage/Carousels/MobileCarousel/MobileCarousel'


function Tablet() {

    return (
        <div className="Tablet">
          <AppAd />
          <Header />
          <ButtonsRow />
          <Banner1 />
          <MobileCarousel />
            
        </div>
    );
}

export default Tablet;