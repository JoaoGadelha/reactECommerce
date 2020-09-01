import React, { useState, useEffect, useLayoutEffect } from 'react';
import './App.css';

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
        <div className="Phone">
            {visibleAd && <div className='app-ad' >
                <div>
                    <span>Download now our new app and enjoy exclusive promotions!</span>
                    <button>Download <span>our app</span></button>
                </div>
                <img src='https://m.casasbahia.com.br/assets/images/icon-fechar.svg' onClick={closeAppAd}></img>
            </div>}
        </div>
    );
}

export default Phone;