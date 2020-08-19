import React, { useEffect } from 'react'
import img1 from '../img/carousel1/tv01.webp'
import img2 from '../img/carousel1/tv02.webp'
import img3 from '../img/carousel1/tv03.webp'
import img4 from '../img/carousel1/tv04.webp'
import img5 from '../img/carousel1/tv05.webp'


const Carousel1 = () => {

    let counter = 0;
    let imgArray = [];
    let sDotsContainer = [];
    let sDotsArray = [];

    useEffect(() => {
        // Vertically center next e previous arrows in image slider
        /*let arrow = document.getElementsByClassName('fas');
        for (let i = 0; i < arrow.length; i++) {
            if (arrow[i].className.includes('fa-chevron-circle')) {
                arrow[i].style.transform = 'translateY(' + -arrow[i].offsetHeight / 2 + 'px)';
            };
        }*/


        // places in imgArray every image in the carousel1
        imgArray = document.querySelectorAll('[class^="carousel1-img"]');

        // adds one slick dot for each element of imgArray
        sDotsContainer = document.getElementsByClassName('slick-dots-container');
        imgArray.forEach((item, index) => {
            let element = document.createElement('BUTTON');
            element.className = 'slick-dot-item';
            if (index === counter) {
                element.className = 'slick-dot-item current';
            }
            element.onclick = () => dotClick(index);
        sDotsContainer[0].appendChild(element);
    });

    // ----------------------
    sDotsArray = document.getElementsByClassName('slick-dot-item');
}, [])


const dotClick = (index) => {
    counter = index;    
    updateCurrentImg();
    sDotsArray = document.getElementsByClassName('slick-dot-item');
    for (let i = 0; i < sDotsArray.length; i++){
        sDotsArray[i].className = 'slick-dot-item';
    }
    sDotsArray[counter].className = 'slick-dot-item current';
}


// Removes 'current' from all the names of the classes of the images in the carousel1
// And adds 'current' to the name of the class of the image pointed by 'counter'
const updateCurrentImg = () => {
    let aux;
    imgArray.forEach(item => {
        aux = item.className.split('current');
        item.className = aux[0];
    })
    imgArray[counter].className = imgArray[counter].className + ' current';
    }

const nextImg = () => {
    if (counter === imgArray.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    updateCurrentImg();
    dotClick(counter);
}

const prevImg = () => {
    if (counter === 0) {
        counter = imgArray.length - 1;
    } else {
        counter--;
    }
    updateCurrentImg();
    dotClick(counter);
}

return (
    <div className='carousel1-container'>
        <div className='carousel1-slider'>
            <img src={img1} className='carousel1-img1 current' />
            <img src={img2} className='carousel1-img2' />
            <img src={img3} className='carousel1-img3' />
            <img src={img4} className='carousel1-img4' />
            <img src={img5} className='carousel1-img5' />
            <i className="fas fa-chevron-circle-right " onClick={nextImg}></i>
            <i className="fas fa-chevron-circle-left" onClick={prevImg}></i>
            <div className='slick-dots-wrapper'>
                <div className='slick-dots-container'>
                </div>
            </div>
        </div>
    </div>
)
}

export default Carousel1;