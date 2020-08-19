import React from 'react';
import logo from './img/base/logo.svg';
import './App.css';
import HeaderRow1 from './Components/HeaderRow1'
import HeaderRow2 from './Components/HeaderRow2'
import HeaderRow3 from './Components/HeaderRow3'
import HeaderRow4 from './Components/HeaderRow4'
import Banner1 from './Components/Banner1'
import Carousel1 from './Components/Carousel1'

function App() {
  return (
    <div className="App">
      <header>
        <HeaderRow1/>
        <HeaderRow2/>
        <HeaderRow3/>
        <HeaderRow4/>
        <Banner1/>
      </header>
      <Carousel1/>

    </div>
  );
}

export default App;
