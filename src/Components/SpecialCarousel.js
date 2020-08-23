import React from 'react'
import img1 from '../img/specialCarousel/slide1.png'
import img2 from '../img/specialCarousel/slide2.jpg'
import img3 from '../img/specialCarousel/slide3.jpeg'

const SpecialCarousel = () => {
    let specC;

    const nextFcn = () => {
    specC = document.getElementsByClassName('special-carousel');
        specC[0].style.transform='translateX(-1000px)';
}

        const prevFcn = () => {
            specC = document.getElementsByClassName('special-carousel');
            specC[0].style.transform='translateX(0px)';
        }

    return (
        <div className='special-carousel-container'>
            <div className='special-carousel'>
                
            <img src={img3}/>
                <img src={img1}/>
                <img src={img2}/>
            </div>
            <button onClick={nextFcn} className='btn nextBtn'>NEXT</button>
            <button onClick={prevFcn} className='btn prevBtn'>PREV</button>
        </div>
    )
}

export default SpecialCarousel