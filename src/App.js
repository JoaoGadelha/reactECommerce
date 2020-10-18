import React, { useState, useEffect, useLayoutEffect } from 'react';
import './App.css';
import { useMediaQuery } from 'react-responsive'
import Desktop from './Desktop'
import Tablet from './Tablet'
import Phone from './Phone'
import { Provider } from './Context'
import { BrowserRouter as Router} from "react-router-dom";

function App() {

  /*function getBrowserWidth() {
          return Math.max(
            document.body.scrollWidth,
            document.documentElement.scrollWidth,
            document.body.offsetWidth,
            document.documentElement.offsetWidth,
            document.documentElement.clientWidth
          );
        }*/

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1224px) and (min-width: 500px)' });
  const isPhone = useMediaQuery({ query: '(max-width: 500px)' });



  return (
    <Provider>
      <Router>
      <div className="App" >
        {isDesktopOrLaptop && <Desktop />}
        {isTablet && <Tablet />}
        {isPhone && <Phone />}
      </div>
      </Router>
    </Provider>
  );
}

export default App;