import React, { useEffect, useRef } from 'react'
import MWCarItem from './MWCarItem'
import i1 from './imgMWCar/img1'
import i2 from './imgMWCar/img2'
import i3 from './imgMWCar/img3'
import i4 from './imgMWCar/img4'
import i5 from './imgMWCar/img5'
import i6 from './imgMWCar/img6'
import i7 from './imgMWCar/img7'
import i8 from './imgMWCar/img8'


const MWCar = () => {
    let dotArray;
    let mwcar;
    let walkDist;
    let mwcarItem;
    let counter;
    let limitedTitleArray = ['Television Samsung', 'Television Philco', 'LCD Television', 'Washing Machine', 'Fridge LG', 'Oven LG', 'Electric Oven Philips', 'Washing Machine'];
    let prevRef = useRef(null);
    let nextRef = useRef(null);

    useEffect(() => {
        counter = 0;
        mwcarItem = document.getElementsByClassName('mwcar-item invisible');
        updateArrows();
        updateDot();
    }, []);




    const nextFun = () => {
        mwcarItem = document.getElementsByClassName('mwcar-item');
        if (counter < mwcarItem.length - 1) {
            counter += 1;
            updateDot();
            walkCar();
        }
    }

    const prevFun = () => {
        if (counter > 0) {
            counter -= 1;
            updateDot();
            walkCar();
        }
    }

    const updateArrows = () => {
        prevRef.current.style.opacity = '1';
        nextRef.current.style.opacity = '1';
        nextRef.current.style.cursor = 'pointer';
        prevRef.current.style.cursor = 'pointer';
        if (counter === 0) {
            prevRef.current.style.opacity = '0';
            nextRef.current.style.opacity = '1';
            prevRef.current.style.cursor = 'unset';
            nextRef.current.style.cursor = 'pointer';
        } else
            if (counter === 7) {
                nextRef.current.style.opacity = '0';
                prevRef.current.style.opacity = '1';
                nextRef.current.style.cursor = 'unset';
                prevRef.current.style.cursor = 'pointer';
            }
    }

    const updateDot = () => {
        dotArray = document.getElementsByClassName('dot-item');
        for (let i = 0; i < dotArray.length; i++) {
            if (i === counter) {
                dotArray[i].style.background = '#0033c6';
            } else {
                dotArray[i].style.background = '#f5f5f5';
            }
        }
    }

    const walkCar = () => {
        mwcar = document.getElementsByClassName('mwcar-slider');
        mwcar[0].style.transform = 'translateX(' + -counter * document.getElementsByClassName('mwcar-item')[0].offsetWidth + 'px)';
        updateArrows();
        updateDot();
    }


    return (
        <div className='mwcar-container'>
            <div className='mwcar-slider'>
                <MWCarItem img={i1} title={limitedTitleArray[0]} oldPrice='$ 999.00' price='$849.00' />
                <MWCarItem img={i2} title={limitedTitleArray[1]} oldPrice='$ 999.00' price='$849.00' />
                <MWCarItem img={i3} title={limitedTitleArray[2]} oldPrice='$ 999.00' price='$849.00' />
                <MWCarItem img={i4} title={limitedTitleArray[3]} oldPrice='$ 999.00' price='$849.00' />
                <MWCarItem img={i5} title={limitedTitleArray[4]} oldPrice='$ 999.00' price='$849.00' />
                <MWCarItem img={i6} title={limitedTitleArray[5]} oldPrice='$ 999.00' price='$849.00' />
                <MWCarItem img={i7} title={limitedTitleArray[6]} oldPrice='$ 999.00' price='$849.00' />
                <MWCarItem img={i8} title={limitedTitleArray[7]} oldPrice='$ 999.00' price='$849.00' />

            </div>
            <div className='mwcar-arrow-div' onClick={prevFun} ref={prevRef}><i className="fas fa-chevron-circle-left" ></i></div>
            <div className='mwcar-arrow-div' onClick={nextFun} ref={nextRef}><i className="fas fa-chevron-circle-right" ></i></div>
            <div className='slick-dots-container' >
                <div className='dot-item' onClick={() => { counter = 0; walkCar(); }}></div>
                <div className='dot-item' onClick={() => { counter = 1; walkCar(); }}></div>
                <div className='dot-item' onClick={() => { counter = 2; walkCar(); }}></div>
                <div className='dot-item' onClick={() => { counter = 3; walkCar(); }}></div>
                <div className='dot-item' onClick={() => { counter = 4; walkCar(); }}></div>
                <div className='dot-item' onClick={() => { counter = 5; walkCar(); }}></div>
                <div className='dot-item' onClick={() => { counter = 6; walkCar(); }}></div>
                <div className='dot-item' onClick={() => { counter = 7; walkCar(); }}></div>
            </div>
        </div>
    )
}

export default MWCar