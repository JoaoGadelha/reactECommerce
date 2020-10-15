import React from 'react';
import './HeaderRow3.css'
import Container from './Container'
import { dropdown1, dropdown2 } from './dropdown_variables'

const HeaderRow3 = () => {


    return (
        <div className='header-row-3'>
            <div className='grid-container'>
                <div className='grid-item grid-item1'><a href='' style={{ textDecoration: 'none' }}>SEE ALL OUR SERVICES</a>
                    <div className='dropdown-wrapper ddw1'>
                        <div className='dropdown-content ddc1' >
                            <h3>Divisions</h3>
                            <ul>
                                {dropdown1.col1.map((item) => <Container text={item}></Container>)}
                            </ul>
                            <ul>
                                {dropdown1.col2.map((item) => <Container text={item}></Container>)}
                            </ul>
                            <ul>
                                {dropdown1.col3.map((item) => <Container text={item}></Container>)}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='grid-item grid-item2'><a href='' style={{ textDecoration: 'none' }}>TELEPHONES</a>
                    <div className='dropdown-wrapper ddw2'>
                        <div className='dropdown-content ddc2' >
                            <h3>Choose the brand</h3>
                            <ul>
                                {dropdown2.col1.map((item) => <Container text={item}></Container>)}
                            </ul>
                            <ul>
                                {dropdown2.col2.map((item) => <Container text={item}></Container>)}
                            </ul>
                            <ul>
                                {dropdown2.col3.map((item) => <Container text={item}></Container>)}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='grid-item'><a href='' style={{ textDecoration: 'none' }}>ELECTRICAL APPLIANCES</a></div>
                <div className='grid-item'> <a href='' style={{ textDecoration: 'none' }}>TV's</a></div>
                <div className='grid-item'><a href='' style={{ textDecoration: 'none' }}>FURNITURE</a></div>
                <div className='grid-item'><a href='' style={{ textDecoration: 'none' }}>SMALL APPLIANCES</a></div>
                <div className='grid-item'><a href='' style={{ textDecoration: 'none' }}>COMPUTERS</a></div>
                <div className='grid-item'><a href='' style={{ textDecoration: 'none' }}>SERVICES</a></div>
                <div className='grid-item'><a href='' style={{ textDecoration: 'none' }}>PROMOTIONS</a><a href='' style={{ textDecoration: 'none' }}> YOU SAW ON TV</a></div>
                <div className='grid-item'><a href='' style={{ textDecoration: 'none' }}>ELECTROSHOPPING CARD</a>  </div>
            </div>

        </div>
    )
}

export default HeaderRow3