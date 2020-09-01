import React from 'react'
import './Header.css'
import logo from './logo.svg';

const Header = () => {

    return (
        <div className='header'>
            <div className='imgContainer'>
                <img src='https://m.casasbahia.com.br/assets/images/ic-new-menu.svg'></img>
                <img src={logo} className='logo'></img>
            </div>
        </div>
    )
}

export default Header