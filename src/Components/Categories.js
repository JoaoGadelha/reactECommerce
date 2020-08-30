import React from 'react'
import img1 from '../img/categories/img1'
import img2 from '../img/categories/img2'
import img3 from '../img/categories/img3'
import img4 from '../img/categories/img4'
import img5 from '../img/categories/img5'
import img6 from '../img/categories/img6'
import img7 from '../img/categories/img7'
import img8 from '../img/categories/img8'
import img9 from '../img/categories/img9'
import img10 from '../img/categories/img10'
import img11 from '../img/categories/img11'
import img12 from '../img/categories/img12'


const Categories = () => {
    return (
        <div className='categories-wrapper'>
            <h1>Categories</h1>
            <div className='categories-container'>
                <div className='categories-item'><a href='#'><img src={img1}></img><p>Women's</p></a></div>
                <div className='categories-item'><a href='#'><img src={img2}></img><p>Men's</p></a></div>
                <div className='categories-item'><a href='#'><img src={img3}></img><p>Pets</p></a></div>
                <div className='categories-item'><a href='#'><img src={img4}></img><p>Toys</p></a></div>
                <div className='categories-item'><a href='#'><img src={img5}></img><p>Home</p></a></div>
                <div className='categories-item'><a href='#'><img src={img6}></img><p>Kitchen & Dining</p></a></div>
                <div className='categories-item'><a href='#'><img src={img7}></img><p>Kids</p></a></div>
                <div className='categories-item'><a href='#'><img src={img8}></img><p>Baby</p></a></div>
                <div className='categories-item'><a href='#'><img src={img9}></img><p>Sports & Outdoors</p></a></div>
                <div className='categories-item'><a href='#'><img src={img10}></img><p>Electronics</p></a></div>
                <div className='categories-item'><a href='#'><img src={img11}></img><p>Furniture</p></a></div>
                <div className='categories-item'><a href='#'><img src={img12}></img><p>Patio & Garden</p></a></div>
            </div>
        </div>
    )
}

export default Categories