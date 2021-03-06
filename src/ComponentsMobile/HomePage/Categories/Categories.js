import React from 'react'
import img1 from './categories_img/img1'
import img2 from './categories_img/img2'
import img3 from './categories_img/img3'
import img4 from './categories_img/img4'
import img5 from './categories_img/img5'
import img6 from './categories_img/img6'
import img7 from './categories_img/img7'
import img8 from './categories_img/img8'
import img9 from './categories_img/img9'
import img10 from './categories_img/img10'
import img11 from './categories_img/img11'
import img12 from './categories_img/img12'
import './Categories.css'

const Categories = () => {
    return (
        <div className='categories-wrapper-mobile'>
            <h1>Categories</h1>
            <div className='categories-container-mobile'>
                <div className='categories-item-mobile'><a></a><p>Women's</p></div>
                <div className='categories-item-mobile'><a></a><p>Men's</p></div>
                <div className='categories-item-mobile'><a></a><p>Kids</p></div>
                <div className='categories-item-mobile'><a></a><p>Baby</p></div>
                <div className='categories-item-mobile'><a></a><p>Sports & Outdoors</p></div>
                <div className='categories-item-mobile'><a></a><p>Electronics</p></div>
                <div className='categories-item-mobile'><a></a><p>Pets</p></div>
                <div className='categories-item-mobile'><a></a><p>Toys</p></div>
                <div className='categories-item-mobile'><a></a><p>Home</p></div>
                <div className='categories-item-mobile'><a></a><p>Kitchen & Dining</p></div>
                <div className='categories-item-mobile'><a></a><p>Furniture</p></div>
                <div className='categories-item-mobile'><a></a><p>Patio & Garden</p></div>
            </div>
        </div>
    )
}

export default Categories