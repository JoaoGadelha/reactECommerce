import React, { useState, useEffect, useLayoutEffect } from 'react';
import './App.css';
import Header from './ComponentsSmall/HomePage/Header/Header'
import AppAd from './ComponentsSmall/HomePage/AppAd/AppAd'
import ButtonsRow from './ComponentsSmall/HomePage/ButtonsRow/ButtonsRow'
import Banner1 from './ComponentsSmall/HomePage/Banner1/Banner1'
import MobileCarousel from './ComponentsSmall/HomePage/Carousels/MobileCarousel/MobileCarousel'
import Promotion1 from './ComponentsSmall/HomePage/Promotion1/Promotion1'
import Carousel2 from './ComponentsSmall/HomePage/Carousels/Carousel2/Carousel2'
import Categories from './ComponentsSmall/HomePage/Categories/Categories'
import MWCar from './ComponentsSmall/HomePage/Carousels/MostWanted/MostWanted'
import Products from './ComponentsSmall/HomePage/FirstPageProducts/Products'
import Footer from './ComponentsSmall/HomePage/Footer/Footer'


function Phone() {
  let [visibleAd, setVisibleAd] = useState(true);

  /*function getBrowserWidth() {
      return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
      );
    }*/

  const closeAppAd = () => {
    setVisibleAd(false);
  }
  return (
    <div className="Phone" >
      <AppAd />
      <Header />
      <ButtonsRow />
      <Banner1 />
      <MobileCarousel />
      <Promotion1 />
      <Carousel2 />
      <Categories />
      <MWCar />
      <Footer />
    </div>
  );
}

export default Phone;