import React, { useState, useEffect, useLayoutEffect } from 'react';
import './App.css';
import Header from './ComponentsMobile/HomePage/Header/Header'
import AppAd from './ComponentsMobile/HomePage/AppAd/AppAd'

function Tablet() {

    return (
        <div className="Tablet">
          <AppAd />
          <Header />
            
        </div>
    );
}

export default Tablet;