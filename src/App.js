import React from 'react';
import './App.css';
import HeaderRow1 from './Components/Header/HeaderRow1/HeaderRow1'
import HeaderRow2 from './Components/Header/HeaderRow2/HeaderRow2'
import HeaderRow3 from './Components/Header/HeaderRow3/HeaderRow3'
import HeaderRow4 from './Components/Header/HeaderRow4/HeaderRow4'
import Banner1 from './Components/Banner1/Banner1'
import Carousel1 from './Components/Carousels/Carousel1/Carousel1'
import Promotion1 from './Components/Promotion1/Promotion1'
import SpecialCarousel from './Components/Carousels/SpecialCarousel/SpecialCarousel'
import Carousel2 from './Components/Carousels/Carousel2/Carousel2'
import Categories from './Components/Categories/Categories'
import MostWanted from './Components/Carousels/MostWanted/MostWanted'
import Products from './Components/FirstPageProducts/Products'
import Footer from './Components/Footer/Footer'

function App() {
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

export default App;
