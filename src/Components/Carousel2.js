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

    useEffect(() => {
        console.log(document.getElementsByClassName('fa-chevron-circle-left')[0]);
        document.getElementsByClassName('fa-chevron-circle-left')[1].style.display='none';

        /*carousel2 = document.getElementsByClassName('carousel2');
        window.addEventListener('resize',() => {
            carousel2 = document.getElementsByClassName('carousel2');
            walkDist = carousel2[0].offsetWidth/3;                          
        });*/
    },[]);
    useEffect(() => {},[]);

    const nextFcn = () => {
        document.getElementsByClassName('fa-chevron-circle-left')[1].style.display='block';
        carousel2 = document.getElementsByClassName('carousel2');
        carousel2ChildrenArray = carousel2[0].children;
        if (counter + numVis < carousel2ChildrenArray.length) {
            if(counter + 2*numVis >= carousel2ChildrenArray.length){
                document.getElementsByClassName('fa-chevron-circle-right')[1].style.display='none';
            }
            walkDist = carousel2[0].offsetWidth * numVis;
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
        document.getElementsByClassName('fa-chevron-circle-right')[1].style.display='block';
        carousel2 = document.getElementsByClassName('carousel2');
        carousel2ChildrenArray = carousel2[0].children;
        if (counter - numVis >= 0) {
            if(counter - 2*numVis < 0) {
                document.getElementsByClassName('fa-chevron-circle-left')[1].style.display='none';
            }
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
                    <a className='content' href='#'>
                        <img src={img1}></img>                        
                            <div className='flag'></div>
                            <div className='product-details'>
                                Washing Machine Brastemp BWK12AB with Advanced Stain Removal White - 12Kg
                            </div>
                            <div className='old-price'>Old price: <span>$349.90</span></div>
                            <div className='actual-price'>$299.90</div>
                            <div className='installment'>Up to 10 payments interest-free</div>
                        </a>
                    </div>
                    <div className='carousel2-item visible'>
                        <a className='content' href='#'>
                        <img src={img2}></img>                                                        <div className='flag'></div>
                            <div className='product-details'>
                               Professional Ceramic Electric Hairbrush MegaHair with Natural Bristle and Nylon
                            </div>
                            <div className='old-price'></div>
                            <div className='actual-price'>$19.90</div>
                            <div className='installment'></div>
                        </a>
                    </div>
                    <div className='carousel2-item visible'>
                        <a className='content' href='#'>
                        <img src={img3}></img>
                            <div className='flag'></div>
                            <div className='product-details'>
                                Wireless Earphones JBL Tune 220TWS Pure Bass  Battery 19 Hours White
                            </div>
                            <div className='old-price'>Old price: <span>119.90</span></div>
                            <div className='actual-price'> $99.90</div>
                            <div className='installment'>Up to 10 payments interest-free</div>
                        </a>
                    </div>
                    <div className='carousel2-item visible'>
                        <a className='content' href='#'>
                        <img src={img4}></img>
                            <div className='flag'></div>
                            <div className='product-details'>
                                Acoustic Guitar Nylon Ac39 Pink Memphis By Tagima
                            </div>
                            <div className='old-price'></div>
                            <div className='actual-price'>$59.90</div>
                            <div className='installment'>Up to 10 payments interest-free</div>
                        </a>
                    </div>
                    <div className='carousel2-item'>
                        <a className='content' href='#'>
                        <img src={img5}></img>
                            <div className='flag'></div>
                            <div className='product-details'>
Air Conditioner Split Samsung Digital Inverter 11.500 BTU/h Frio AR12NVFPCWKNAZ
                            </div>
                            <div className='old-price'></div>
                            <div className='actual-price'>$459.90</div>
                            <div className='installment'>Up to 10 payments interest-free</div>
                        </a>
                    </div>
                    <div className='carousel2-item'>
                        <a className='content' href='#'>
                        <img src={img6}></img>
                            <div className='flag'></div>
                            <div className='product-details'>
                                Smart TV LED 43" Full HD Samsung T5300 HDR, Tizen OS, Wi-Fi...
                            </div>
                            <div className='old-price'>Old price: <span>349.90</span></div>
                            <div className='actual-price'>$329.90</div>
                            <div className='installment'>Up to 12 payments interest-free</div>
                        </a>
                    </div>
                    <div className='carousel2-item'>
                        <a className='content' href='#'>
                        <img src={img7}></img>
                            <div className='flag'></div>
                            <div className='product-details'>
                                Laundry Detergent Comfort Fiber Protect 3L
                            </div>
                            <div className='old-price'></div>
                            <div className='actual-price'>$32.90</div>
                            <div className='installment'>Up to 10 payments interest-free</div>
                        </a>
                    </div>
                    <div className='carousel2-item'>
                        <a className='content' href='#'>
                        <img src={img8}></img>
                            <div className='flag'></div>
                            <div className='product-details'>
Powdered Milk for Kids Ninho Phases 1 Kit 6 Cans 800G
                            </div>
                            <div className='old-price'></div>
                            <div className='actual-price'>$49.90</div>
                            <div className='installment'>Up to 10 payments interest-free</div>
                        </a>
                    </div>
                    <div className='carousel2-item'>
                        <a className='content' href='#'>
                        <img src={img9}></img>
                            <div className='flag'></div>
                            <div className='product-details'>
         Digital Camera and Recorder Xtrax Selfie 4K 16MP Red
                            </div>
                            <div className='old-price'>Old price:<span>$89.90</span></div>
                            <div className='actual-price'>$79.90</div>
                            <div className='installment'>Up to 12 payments interest-free</div>
                        </a>
                    </div>
                    <div className='carousel2-item'>
                        <a className='content' href='#'>
                        <img src={img10}></img>
                            <div className='flag'></div>
                            <div className='product-details'>
                                Couple Microfiber Sheets  180g/m² - Coral
                            </div>
                            <div className='old-price'></div>
                            <div className='actual-price'>
                                $24.90
                            </div>
                            <div className='installment'>Up to 10 payments interest-free</div>
                        </a>
                    </div>
                    <div className='carousel2-item'>
                        <a className='content' href='#'>
                        <img src={img11}></img>
                            <div className='flag'></div>
                            <div className='product-details'>
                                Kit Gin Beefeater Dry 750ml + Wine Glass 550ml
                            </div>
                            <div className='old-price'></div>
                            <div className='actual-price'>$39.90</div>
                            <div className='installment'>Up to 10 payments interest-free</div>
                        </a>
                    </div>
                    <div className='carousel2-item'>
                        <a className='content' href='#'>
                        <img src={img12}></img>
                            <div className='flag'></div>
                            <div className='product-details'>
                                Bed Box Queen Size + Matress Herval Capri Pillow Inn e Bagged Springs 64x158x1...
                            </div>
                            <div className='old-price'></div>
                            <div className='actual-price'>$129.90</div>
                            <div className='installment'>Up to 10 payments interest-free</div>
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