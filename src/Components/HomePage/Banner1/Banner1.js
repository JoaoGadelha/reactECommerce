import React from 'react'
import bfbanner from './bfbanner.png'
import './Banner1.css'

const Banner1 = () => {
    return (
        <div className='banner1'>
            <div className='banner1-wrapper'>
                <img className='banner1-img' src={bfbanner}>
                </img>
            </div>
        </div>
    )
}

export default Banner1