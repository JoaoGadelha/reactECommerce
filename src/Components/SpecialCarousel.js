import React, { useEffect } from 'react'
import img1 from '../img/specialCarousel/slide1.jpg'
import img2 from '../img/specialCarousel/slide2.jpg'
import img3 from '../img/specialCarousel/slide3.jpg'
/*import img11 from '..img/specialCarousel/items/slide1/img11.jpg'
import img12 from '..img/specialCarousel/items/slide1/img12.jpg'
import img13 from '..img/specialCarousel/items/slide1/img13.jpg'
import img21 from '..img/specialCarousel/items/slide2/img21.jpg'
import img22 from '..img/specialCarousel/items/slide2/img22.jpg'
import img23 from '..img/specialCarousel/items/slide2/img23.jpg'
import img31 from '..img/specialCarousel/items/slide3/img31.jpg'
import img32 from '..img/specialCarousel/items/slide3/img32.jpg'
import img33 from '..img/specialCarousel/items/slide3/img33.jpg'
*/
const SpecialCarousel = () => {
    let specC;
    let walkDist = 0;
    let counter = 0;
    let scpItems;
    /*let scpItemsContent = {
        slide1:{img:[img11,img12,img13],title:['TV 65 Polegadas LG LED Smart Wifi 4k Usb HDMI Comando Voz 65um7470psa.awz','slide1_bbb','slide1_ccc'],desc:['R$
3.989,90
 
ou até 12x de R$332,49 sem juros','slide1_bbb','slide1_ccc']},
        slide2:{img:[img21,img22,img23],title:['slide2_aaa','slide2_bbb','slide2_ccc'],desc:['slide2_aaa','slide2_bbb','slide2_ccc']},
        slide3:{img:[img31,img32,img33],title:['slide3_aaa','slide3_bbb','slide3_ccc'],desc:['slide3_aaa','slide3_bbb','slide3_ccc']}
    }*/

    useEffect(() => {
        specC = document.getElementsByClassName('special-carousel');
        walkDist -= specC[0].offsetWidth;
        specC[0].style.transform = 'translateX(' + walkDist + 'px)';
        counter += 1;
    }, []);

    const nextFcn = () => {
        specC = document.getElementsByClassName('special-carousel');
        if (counter < specC[0].children.length - 1) {
            specC[0].style.transition = '1s ease all';
            walkDist -= specC[0].offsetWidth;
            specC[0].style.transform = 'translateX(' + walkDist + 'px)';
            counter += 1;
        }
    }

    const prevFcn = () => {
        specC = document.getElementsByClassName('special-carousel');
        if (counter > 0) {
            specC[0].style.transition = '1s ease all';
            walkDist += specC[0].offsetWidth;
            specC[0].style.transform = 'translateX(' + walkDist + 'px)';
            counter -= 1;
        }
    }

    const transEnd = () => {
        specC = document.getElementsByClassName('special-carousel');
        specC[0].style.transition = 'none';
        if (counter === specC[0].children.length - 1) {
            walkDist = -specC[0].offsetWidth;
            specC[0].style.transform = 'translateX(' + walkDist + 'px)';
            counter = 1;
        }
        if (counter === 0) {
            walkDist = -specC[0].offsetWidth * (specC[0].children.length - 2);
            specC[0].style.transform = 'translateX(' + walkDist + 'px)';
            counter = specC[0].children.length - 2;
        }
    }

    // updates the special carousel product items
    const scpUpdate = () => { 
        scpItems = document.getElementsByClassName('special-carousel-products');
        for (let i = 0; i < scpItems.length; i++ ) {
            scpItems[i].style.background= 'red';
        }
    }

    return (
        <div className='special-carousel-wrapper'>
            <div className='special-carousel-container'>
                <div className='special-carousel' onTransitionEnd={transEnd}>
                    <img src={img3} />
                    <img src={img1} />
                    <img src={img2} />
                    <img src={img3} />
                    <img src={img1} />

                </div>
            </div>
            <div className='special-carousel-products-container'>
                <div className='special-carousel-products sc-prod1'>
                    <img className='scp-img'></img>
                    <h1 className='scp-title'></h1>
                    <p className='scp-desc'></p>
                </div>
                <div className='special-carousel-products sc-prod2'>
                    <img className='scp-img'></img>
                    <h1 className='scp-title'></h1>
                    <p className='scp-desc'></p></div>
                <div className='special-carousel-products sc-prod3'>
                    <img className='scp-img'></img>
                    <h1 className='scp-title'></h1>
                    <p className='scp-desc'></p>
                </div>
            </div>

            <div className='arrow-container left' onClick={() => {prevFcn(); scpUpdate()}}>
                <i className="fas fa-chevron-left" ></i>
            </div>
            <div className='arrow-container right' onClick={()=>{nextFcn(); scpUpdate()}} >
                <i className="fas fa-chevron-right" ></i>
            </div>
        </div>
    )
}

export default SpecialCarousel