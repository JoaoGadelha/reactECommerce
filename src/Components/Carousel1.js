import React, { useEffect } from 'react'
import img1 from '../img/carousel1/tv01.webp'
import img2 from '../img/carousel1/tv02.webp'

const Carousel1 = () => {

    let displayImg = img1;
    let counter = 0;


    useEffect(() => {
        // Vertically center next e previous arrows in image slider
        let arrow = document.getElementsByClassName('fas');
        for (let i = 0; i < arrow.length; i++) {
            if (arrow[i].className.includes('fa-chevron-circle')) {
                arrow[i].style.transform = 'translateY(' + -arrow[i].offsetHeight / 2 + 'px)';
            };
        }
    }, [])

    const nextImg = () => {

        counter++;
    }

    return (
        <div className='carousel1-container'>
            <div className='carousel1-slider'>
                <img src={img1} />
                <img src={img2} />
                <i className="fas fa-chevron-circle-right" onClick={nextImg}></i>
                <i className="fas fa-chevron-circle-left"></i>
            </div>
        </div>
    )
}

export default Carousel1;