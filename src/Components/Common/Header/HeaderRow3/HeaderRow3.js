import React from 'react';
import './HeaderRow3.css'
import Container from './Container'

const HeaderRow3 = () => {
let cont1 = [
    'Accessories and innovations',
                                'Food',
                                'Ventilation',
                                'Handicraft',
                                'Party items',
                                'Audio',
                                'Automotive',
                                'Babies',
                                'Drinks',
                                'Beauty and Health',
                                'Toys'
];

let cont2 = [
    'Releases',
    'Samsung Galaxy',
    'iPhone',
    'Motorola',    
    'LG',
    'Zenfones',
    'Huawei',
    'Handicraft',     
    'Smartwatches'
]


    return (
        <div className='header-row-3'>
            <div className='grid-container'>
                <div className='grid-item grid-item1'><a href='www.google.com' style={{ textDecoration: 'none' }}>SEE ALL OUR SERVICES</a>
                    <div className='dropdown-wrapper ddw1'>
                        <div className='dropdown-content ddc1' >
                            <h3>Divisions</h3>
                            <ul>
                                {cont1.map((item)=><Container text={item}></Container>)}
                            </ul>
                            <ul>
                            {cont1.map((item)=><Container text={item}></Container>)}
                            </ul><ul>
                            {cont1.map((item)=><Container text={item}></Container>)}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='grid-item grid-item2'><a href='www.google.com' style={{ textDecoration: 'none' }}>TELEPHONES</a>
                <div className='dropdown-wrapper ddw2'>
                        <div className='dropdown-content ddc2' >
                            <h3>Choose the brand</h3>
                            <ul>
                               </ul>
                        </div>
                    </div>
                </div>
                <div className='grid-item'><a href='www.google.com' style={{ textDecoration: 'none' }}>ELECTRIC APPLIANCES</a></div>
                <div className='grid-item'> <a href='www.google.com' style={{ textDecoration: 'none' }}>TV's</a></div>
                <div className='grid-item'><a href='www.google.com' style={{ textDecoration: 'none' }}>FURNITURE</a></div>
                <div className='grid-item'><a href='www.google.com' style={{ textDecoration: 'none' }}>SMALL APPLIANCES</a></div>
                <div className='grid-item'><a href='www.google.com' style={{ textDecoration: 'none' }}>COMPUTERS</a></div>
                <div className='grid-item'><a href='www.google.com' style={{ textDecoration: 'none' }}>SERVICES</a></div>
                <div className='grid-item'><a href='www.google.com' style={{ textDecoration: 'none' }}>PROMOTIONS</a><a href='www.google.com' style={{ textDecoration: 'none' }}> YOU SAW ON TV</a></div>
                <div className='grid-item'><a href='www.google.com' style={{ textDecoration: 'none' }}>ELECTROSHOPPING CARD</a>  </div>
            </div>

        </div>
    )
}

export default HeaderRow3