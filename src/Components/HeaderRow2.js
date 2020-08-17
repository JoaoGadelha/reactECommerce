import React from 'react'
import logo from '../img/base/logo.svg';

const HeaderRow2 = () => {
    return (
        <div className='header-row-2'>
            <img src={logo} alt='logo_electro_shopping'></img>
            <form>
                <input placeholder='What are you looking for ?'></input>
                <i className="fas fa-search"></i>
            </form>
            <span>
                <i className="fas fa-user"></i>
                <strong>
                    <a href='www.google.com'>Log In or Sign up</a>
                </strong>
                <span>
                    <a href='www.google.com'>To see your products</a>
                </span>
            </span>
            <i className="fas fa-shopping-cart"></i>
        </div>
    )
}

export default HeaderRow2;