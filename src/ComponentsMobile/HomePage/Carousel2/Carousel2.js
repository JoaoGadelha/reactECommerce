import React, { useEffect } from 'react'
import Deadline1 from './Deadline1/Deadline1.js'
import img1 from './carousel2_img/img1.webp'
import img2 from './carousel2_img/img2.jpeg'
import img3 from './carousel2_img/img3.jpeg'
import img4 from './carousel2_img/img4.jpeg'
import img5 from './carousel2_img/img5.jpeg'
import img6 from './carousel2_img/img6.jpeg'
import img7 from './carousel2_img/img7.jpeg'
import img8 from './carousel2_img/img8.jpeg'
import img9 from './carousel2_img/img9.jpeg'
import img10 from './carousel2_img/img10.webp'
import img11 from './carousel2_img/img11.jpeg'
import img12 from './carousel2_img/img12.jpeg'
import Carousel2Item from './Carousel2Item.js'
import './Carousel2.css'



const Carousel2 = () => {
    let carousel2;
    let carousel2ChildrenArray;
    let counter = 0;
    let numVis = 2; // number of visible items in the carousel
    let walkDist; // number of pixels the carousel walks when prev or next button is pressed
    let position = 0;

    useEffect(() => {
        document.getElementsByClassName('fa-chevron-circle-left')[0].style.display = 'none';
        /*carousel2 = document.getElementsByClassName('carousel2');
        window.addEventListener('resize',() => {
            carousel2 = document.getElementsByClassName('carousel2');
            walkDist = carousel2[0].offsetWidth/3;                          
        });*/
    }, []);
    useEffect(() => { }, []);

    const nextFcn = () => {
        document.getElementsByClassName('fa-chevron-circle-left')[0].style.display = 'block';
        carousel2 = document.getElementsByClassName('carousel2');
        carousel2ChildrenArray = carousel2[0].children;
        if (counter + numVis < carousel2ChildrenArray.length) {
            if (counter + 2 * numVis >= carousel2ChildrenArray.length) {
                document.getElementsByClassName('fa-chevron-circle-right')[0].style.display = 'none';
            }
            walkDist = (carousel2ChildrenArray[0].offsetWidth + parseFloat(window.getComputedStyle(carousel2ChildrenArray[0]).getPropertyValue('margin-left')) + parseFloat(window.getComputedStyle(carousel2ChildrenArray[0]).getPropertyValue('margin-right'))) * numVis;
            console.log((carousel2ChildrenArray[0].offsetWidth + parseFloat(window.getComputedStyle(carousel2ChildrenArray[0]).getPropertyValue('margin-left')) + parseFloat(window.getComputedStyle(carousel2ChildrenArray[0]).getPropertyValue('margin-right'))) * numVis);
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
        document.getElementsByClassName('fa-chevron-circle-right')[0].style.display = 'block';
        carousel2 = document.getElementsByClassName('carousel2');

        carousel2ChildrenArray = carousel2[0].children;
        if (counter - numVis >= 0) {
            if (counter - 2 * numVis < 0) {
                document.getElementsByClassName('fa-chevron-circle-left')[0].style.display = 'none';
            }
            walkDist = (carousel2ChildrenArray[0].offsetWidth + parseFloat(window.getComputedStyle(carousel2ChildrenArray[0]).getPropertyValue('margin-left')) + parseFloat(window.getComputedStyle(carousel2ChildrenArray[0]).getPropertyValue('margin-right'))) * numVis;
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
        <div className='carousel2-wrapper-mobile'>
            <div className='carousel2-container'>
                <Deadline1 />
                <div className='carousel2' onTransitionEnd={hideItems}>
                    <Carousel2Item flag='' prodDetail='Washing Machine Brastemp BWK12AB with Advanced Stain Removal White - 12Kg' oldPrice={<>Old price: <span>$349.90</span></>} price='$299.90' install='Up to 10 payments interest-free' prodImg={img1} visible={true} />
                    <Carousel2Item flag='' prodDetail='Professional Ceramic Electric Hairbrush MegaHair with Natural Bristle and Nylon' oldPrice={''} price='$19.90' install='' prodImg={img2} visible={true} />
                    <Carousel2Item flag='' prodDetail='Wireless Earphones JBL Tune 220TWS Pure Bass  Battery 19 Hours White' oldPrice={<>Old price: <span>$119.90</span></>} price='$99.90' install='Up to 12 payments interest-free' prodImg={img3} visible={true} />
                    <Carousel2Item flag='' prodDetail='Acoustic Guitar Nylon Ac39 Pink Memphis By Tagima' oldPrice={''} price='$59.90' install='Up to 10 payments interest-free' prodImg={img4} visible={true} />
                    <Carousel2Item flag='' prodDetail='Air Conditioner Split Samsung Digital Inverter 11.500 BTU/h Frio AR12NVFPCWKNAZ' oldPrice={''} price='$459.90' install='Up to 10 payments interest-free' prodImg={img5} visible={''} />
                    <Carousel2Item flag='' prodDetail='Smart TV LED 43" Full HD Samsung T5300 HDR, Tizen OS, Wi-Fi...' oldPrice={<>Old price: <span>$349.90</span></>} price='$329.90' install='Up to 12 payments interest-free' prodImg={img6} visible={''} />
                    <Carousel2Item flag='' prodDetail='Laundry Detergent Comfort Fiber Protect 3L' oldPrice={''} price='$32.90' install='Up to 10 payments interest-free' prodImg={img7} visible={''} />
                    <Carousel2Item flag='' prodDetail='Powdered Milk for Kids Ninho Phases 1 Kit 6 Cans 800G' oldPrice={''} price='$49.90' install='Up to 10 payments interest-free' prodImg={img8} visible={''} />
                    <Carousel2Item flag='' prodDetail='Digital Camera and Recorder Xtrax Selfie 4K 16MP Red' oldPrice={<>Old price: <span>$89.90</span></>} price='$79.90' install='Up to 12 payments interest-free' prodImg={img9} visible={''} />
                    <Carousel2Item flag='' prodDetail='Couple Microfiber Sheets  180g/m² - Coral' oldPrice={''} price='$24.90' install='Up to 10 payments interest-free' prodImg={img10} visible={''} />
                    <Carousel2Item flag='' prodDetail='Kit Gin Beefeater Dry 750ml + Wine Glass 550ml' oldPrice={''} price='$39.90' install='Up to 10 payments interest-free' prodImg={img11} visible={''} />
                    <Carousel2Item flag='' prodDetail='Bed Box Queen Size + Matress Herval Capri Pillow Inn e Bagged Springs 64x158x1...' oldPrice={''} price='$129.90' install='Up to 10 payments interest-free' prodImg={img12} visible={''} />
                </div>
            </div>
            <i className="fas fa-chevron-circle-left" onClick={prevFcn}></i>
            <i className="fas fa-chevron-circle-right" onClick={nextFcn}></i>
        </div>
    )
}

export default Carousel2