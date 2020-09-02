import React from 'react'
import './Header.css'
import logo from './logo.svg';

const Header = () => {

    return (
        <div className='header'>
            <div className='imgContainer'>
                <div>
                    <img className='sandwich-menu' src='https://m.casasbahia.com.br/assets/images/ic-new-menu.svg'></img>
                    <img src={logo} className='logo'></img>
                </div>
                <div>
                    <img src={'https://m.casasbahia.com.br/assets/images/ic-new-ic_favoritos.svg'} className='heart'></img>
                    <img src={'https://m.casasbahia.com.br/assets/images/ic-new-cart-small.svg'} className='shoppingCart'></img>
                </div>
            </div>
            <input className='input' placeholder='What are you looking for?'></input>
        </div>
    )
}

export default Header