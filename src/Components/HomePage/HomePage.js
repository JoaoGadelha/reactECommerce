import React from 'react'
import Carousel1 from './Carousels/Carousel1/Carousel1'
import Promotion1 from './Promotion1/Promotion1'
import SpecialCarousel from './Carousels/SpecialCarousel/SpecialCarousel'
import Carousel2 from './Carousels/Carousel2/Carousel2'
import Categories from './Categories/Categories'
import MostWanted from './Carousels/MostWanted/MostWanted'
import Products from './FirstPageProducts/Products'

const HomePage = () => {
    return (
        <>
            
            <Carousel1 />
            <Promotion1 />
            <SpecialCarousel />
            <Carousel2 />
            <Categories />
            <MostWanted />
            <Products />
        </>
    )
}

export default HomePage