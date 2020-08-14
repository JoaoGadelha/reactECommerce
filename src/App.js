import React from 'react';
import logo from './img/base/logo.svg';
import './App.css';
import HeaderRow1 from './Components/HeaderRow1'
import HeaderRow2 from './Components/HeaderRow2'
import HeaderRow3 from './Components/HeaderRow3'

function App() {
  return (
    <div className="App">
      <header>
        <HeaderRow1/>
        <HeaderRow2/>
        <HeaderRow3/>
      </header>

    </div>
  );
}

export default App;
