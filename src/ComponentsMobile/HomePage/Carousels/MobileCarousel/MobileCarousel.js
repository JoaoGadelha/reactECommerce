import React, { useEffect, useRef } from 'react'
import './MobileCarousel.css'
import img1 from '../../../../img/Mobile/MobileCarousel/img1'
import img2 from '../../../../img/Mobile/MobileCarousel/img2'
import img3 from '../../../../img/Mobile/MobileCarousel/img3'

const MobileCarousel = () => {

    let counter = 0;
    let ref1 = useRef();
    let ref2 = useRef();
    let ref3 = useRef();
    let carRef = useRef();
    let refArray = [ref1, ref2, ref3];
    let timer;

    useEffect(() => {
        ref1.current.style.background = 'red';
        timer = setInterval(() => {
            carRef.current.style.transition = 'ease all 0.3s';
            if (counter <= 3) {
                counter += 1;
                walkCarousel();
            }

        }, 2000)
    }, []);

    const onTransEnd = () => {
        carRef.current.style.transition = 'none';
        if (counter === 3) {
            counter = 0;
            walkCarousel();
        }
    }

    const walkCarousel = () => {
        updateDot();
        carRef.current.style.transform = 'translateX(' + -counter * (carRef.current.children[0].offsetWidth) + 'px)';
    }

    const updateDot = () => {
        if (counter <= 2) {
            for (let i = 0; i < refArray.length; i++) {
                refArray[i].current.style.background = '#EBEBEB';
            }
            refArray[counter].current.style.background = 'red';
        }
    }

    const clickedDot = () => {
        carRef.current.style.transition = 'ease all 0.3s';
        clearInterval(timer);
        walkCarousel();
    }

    return (
        <div className='mobile-carousel-wrapper'>
            <div className='mobile-carousel'>
                <div ref={carRef} className='container' onTransitionEnd={onTransEnd}>
                    <img src={img1}></img>
                    <img src={img2}></img>
                    <img src={img3}></img>
                    <img src={img1}></img>
                </div>
            </div>
            <div className='center-slick-dots'>
                <div className='slick-dots'>
                    <div ref={ref1} className='dot' onClick={() => { counter = 0; clickedDot(); }}></div>
                    <div ref={ref2} className='dot' onClick={() => { counter = 1; clickedDot(); }}></div>
                    <div ref={ref3} className='dot' onClick={() => { counter = 2; clickedDot(); }}></div>


                </div>
            </div>
        </div>
    )

}

export default MobileCarousel
