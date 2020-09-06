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
            <div className='categories-container'>
                <div className='categories-item-mobile'><a href='#'><img src={img1}></img><p>Women's</p></a></div>
                <div className='categories-item-mobile'><a href='#'><img src={img2}></img><p>Men's</p></a></div>
                <div className='categories-item-mobile'><a href='#'><img src={img3}></img><p>Kids</p></a></div>
                <div className='categories-item-mobile'><a href='#'><img src={img4}></img><p>Baby</p></a></div>
                <div className='categories-item-mobile'><a href='#'><img src={img5}></img><p>Sports & Outdoors</p></a></div>
                <div className='categories-item-mobile'><a href='#'><img src={img6}></img><p>Electronics</p></a></div>
                <div className='categories-item-mobile'><a href='#'><img src={img7}></img><p>Pets</p></a></div>
                <div className='categories-item-mobile'><a href='#'><img src={img8}></img><p>Toys</p></a></div>
                <div className='categories-item-mobile'><a href='#'><img src={img9}></img><p>Home</p></a></div>
                <div className='categories-item-mobile'><a href='#'><img src={img10}></img><p>Kitchen & Dining</p></a></div>
                <div className='categories-item-mobile'><a href='#'><img src={img11}></img><p>Furniture</p></a></div>
                <div className='categories-item-mobile'><a href='#'><img src={img12}></img><p>Patio & Garden</p></a></div>
            </div>
        </div>
    )
}

export default Categories