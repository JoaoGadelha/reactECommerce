import React, { useEffect } from 'react'
import Deadline1 from './Deadline1.js'
import img1 from '../img/carousel2/img1.webp'
import img2 from '../img/carousel2/img2.jpeg'
import img3 from '../img/carousel2/img3.jpeg'
import img4 from '../img/carousel2/img4.jpeg'
import img5 from '../img/carousel2/img5.jpeg'
import img6 from '../img/carousel2/img6.jpeg'
import img7 from '../img/carousel2/img7.jpeg'
import img8 from '../img/carousel2/img8.jpeg'
import img9 from '../img/carousel2/img9.jpeg'
import img10 from '../img/carousel2/img10.webp'
import img11 from '../img/carousel2/img11.jpeg'
import img12 from '../img/carousel2/img12.jpeg'



const Carousel2 = () => {
    let carousel2;
    let carousel2ChildrenArray;
    let counter = 0;
    let numVis = 4; // number of visible items in the carousel
    let walkDist; // number of pixels the carousel walks when prev or next button is pressed
    let position = 0;

    /*useEffect(() => {
        carousel2 = document.getElementsByClassName('carousel2');
        window.addEventListener('resize',() => {
            carousel2 = document.getElementsByClassName('carousel2');
            walkDist = carousel2[0].offsetWidth/3;                          
        });
    },[]);*/

    const nextFcn = () => {
        carousel2 = document.getElementsByClassName('carousel2');
        carousel2ChildrenArray = carousel2[0].children;
        if (counter + numVis < carousel2ChildrenArray.length) {
            walkDist = carousel2[0].offsetWidth * numVis;
            console.log(walkDist);
            position -= walkDist;
            carousel2[0].style.transform = 'translateX(' + position + 'px)';
            for (let i = 0; i < carousel2ChildrenArray.length; i++) {
                carousel2ChildrenArray[i].className = carousel2ChildrenArray[i].className.split('visible');
                carousel2ChildrenArray[i].className = carousel2ChildrenArray[i].className + ' visible';
            }
            counter += numVis;
        }
    }

    const prevFcn = () => {
        carousel2 = document.getElementsByClassName('carousel2');
        carousel2ChildrenArray = carousel2[0].children;
        if (counter - numVis >= 0) {
            walkDist = carousel2[0].offsetWidth * numVis;
            position += walkDist;
            carousel2[0].style.transform = 'translateX(' + position + 'px)';
            for (let i = 0; i < carousel2ChildrenArray.length; i++) {
                carousel2ChildrenArray[i].className = carousel2ChildrenArray[i].className.split('visible');
                carousel2ChildrenArray[i].className = carousel2ChildrenArray[i].className + ' visible';
            }
            counter -= numVis;
        }
    }

    const hideItems = () => {
        carousel2 = document.getElementsByClassName('carousel2');
        carousel2ChildrenArray = carousel2[0].children;
        for (let i = 0; i < carousel2ChildrenArray.length; i++) {
            carousel2ChildrenArray[i].className = carousel2ChildrenArray[i].className.split('visible');
            if (i >= counter && i < counter + numVis) {
                carousel2ChildrenArray[i].className = carousel2ChildrenArray[i].className + ' visible';
            }
        }
    }
    return (
        <div className='carousel2-wrapper'>
            <div className='carousel2-container'>
                <Deadline1 />
                <div className='carousel2' onTransitionEnd={hideItems}>
                    <div className='carousel2-item visible'>
                        <img src={img1}></img>
                        <a className='content' href='#'>
                            <div className='flag'></div>
                            <div className='product-details'>
                                Washing Machine Brastemp BWK12AB with Advanced Stain Removal White - 12Kg
                            </div>
                            <div className='old-price'></div>
                            <div className='actual-price'></div>
                            <div className='installment'></div>
                        </a>
                    </div>
                    <div className='carousel2-item visible'>
                        <img src={img2}></img>
                        <a className='content' href='#'>
                                                        <div className='flag'></div>
                            <div className='product-details'>
                               Electric Hairbrush MegaHair
                            </div>
                            <div className='old-price'></div>
                            <div className='actual-price'></div>
                            <div className='installment'></div>
                        </a>
                    </div>
                    <div className='carousel2-item visible'>
                        <img src={img3}></img>
                        <a className='content' href='#'>
                            <div className='flag'></div>
                            <div className='product-details'>
                                Wireless Earphones JBL White
                            </div>
                            <div className='old-price'></div>
                            <div className='actual-price'></div>
                            <div className='installment'></div>
                        </a>
                    </div>
                    <div className='carousel2-item visible'>
                        <img src={img4}></img>
                        <a className='content' href='#'>
                            <div className='flag'></div>
                            <div className='product-details'>
                                Acoustic Guitar Nylon Ac39 Pink Memphis By Tagima
                            </div>
                            <div className='old-price'></div>
                            <div className='actual-price'></div>
                            <div className='installment'></div>
                        </a>
                    </div>
                    <div className='carousel2-item'>
                        <img src={img5}></img>
                        <a className='content' href='#'>
                            <div className='flag'></div>
                            <div className='product-details'>
Air Conditioner Split Samsung Digital Inverter 11.500 BTU/h Frio AR12NVFPCWKNAZ
                            </div>
                            <div className='old-price'></div>
                            <div className='actual-price'></div>
                            <div className='installment'></div>
                        </a>
                    </div>
                    <div className='carousel2-item'>
                        <img src={img6}></img>
                        <a className='content' href='#'>
                            <div className='flag'></div>
                            <div className='product-details'>
                                Smart TV LED 43" Full HD Samsung T5300 HDR, Tizen OS, Wi-Fi...
                            </div>
                            <div className='old-price'></div>
                            <div className='actual-price'></div>
                            <div className='installment'></div>
                        </a>
                    </div>
                    <div className='carousel2-item'>
                        <img src={img7}></img>
                        <a className='content' href='#'>
                            <div className='flag'></div>
                            <div className='product-details'>
                                Washing Machine Comfort Fiber Protect 3L
                            </div>
                            <div className='old-price'></div>
                            <div className='actual-price'></div>
                            <div className='installment'></div>
                        </a>
                    </div>
                    <div className='carousel2-item'>
                        <img src={img8}></img>
                        <a className='content' href='#'>
                            <div className='flag'></div>
                            <div className='product-details'>
Powdered Milk for Kids Ninho Phases 1 Kit 6 Cans 800G
                            </div>
                            <div className='old-price'></div>
                            <div className='actual-price'></div>
                            <div className='installment'></div>
                        </a>
                    </div>
                    <div className='carousel2-item'>
                        <img src={img9}></img>
                        <a className='content' href='#'>
                            <div className='flag'></div>
                            <div className='product-details'>
         Digital Camera and Recorder Xtrax Selfie 4K 16MP Red
                            </div>
                            <div className='old-price'></div>
                            <div className='actual-price'></div>
                            <div className='installment'></div>
                        </a>
                    </div>
                    <div className='carousel2-item'>
                        <img src={img10}></img>
                        <a className='content' href='#'>
                            <div className='flag'></div>
                            <div className='product-details'>
                                Couple Microfiber Sheets  180g/m² - Coral
                            </div>
                            <div className='old-price'></div>
                            <div className='actual-price'>
                                <div className='price-label'></div>
                                <div className='price-value'></div>
                            </div>
                            <div className='installment'></div>
                        </a>
                    </div>
                    <div className='carousel2-item'>
                        <img src={img11}></img>
                        <a className='content' href='#'>
                            <div className='flag'></div>
                            <div className='product-details'>
                                Kit Gin Beefeater Dry 750ml + Wine Glass 550ml
                            </div>
                            <div className='old-price'></div>
                            <div className='actual-price'></div>
                            <div className='installment'></div>
                        </a>
                    </div>
                    <div className='carousel2-item'>
                        <img src={img12}></img>
                        <a className='content' href='#'>
                            <div className='flag'></div>
                            <div className='product-details'>
                                Cama Box Queen Size + Matress Herval Capri Pillow Inn e Bagged Springs 64x158x1...
                            </div>
                            <div className='old-price'></div>
                            <div className='actual-price'></div>
                            <div className='installment'></div>
                        </a>
                    </div>
                </div>
                <i className="fas fa-chevron-circle-left " onClick={prevFcn}></i>
                <i className="fas fa-chevron-circle-right " onClick={nextFcn}></i>
            </div>
        </div>
    )
}

export default Carousel2