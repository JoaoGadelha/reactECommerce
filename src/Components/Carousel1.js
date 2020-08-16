import React from 'react'
import img1 from '../img/carousel1/tv01.webp'
import img2 from '../img/carousel1/tv02.webp'

const Carousel1 = () => {

    return (
        <div className='carousel1-container'>
            <div className='carousel1-slider'>
                <img src={img1} />
                <img src={img2} />
            </div>
        </div>
    )
}

export default Carousel1;