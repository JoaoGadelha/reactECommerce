import React, { useState, useEffect } from 'react'
import img1 from '../img/specialCarousel/slide1.jpg'
import img2 from '../img/specialCarousel/slide2.jpg'
import img3 from '../img/specialCarousel/slide3.jpg'
import i1 from '../img/specialCarousel/1.png'
import i2 from '../img/specialCarousel/2.png'
import i3 from '../img/specialCarousel/3.png'
import i4 from '../img/specialCarousel/4.png'
import i5 from '../img/specialCarousel/5.png'
import img11 from '../img/specialCarousel/items/slide1/img11'
import img12 from '../img/specialCarousel/items/slide1/img12'
import img13 from '../img/specialCarousel/items/slide1/img13'
import img21 from '../img/specialCarousel/items/slide2/img21'
import img22 from '../img/specialCarousel/items/slide2/img22'
import img23 from '../img/specialCarousel/items/slide2/img23'
import img31 from '../img/specialCarousel/items/slide3/img31'
import img32 from '../img/specialCarousel/items/slide3/img32'
import img33 from '../img/specialCarousel/items/slide3/img33'

const SpecialCarousel = () => {
    let specC;
    let [walkDist, setWalkDist] = useState(0);
    let [counter, setCounter] = useState(0);
    let scpItemsContent = {
        slide1: {
            item1: {
                img: img11,
                title: 'TV 65 Polegadas LG LED Smart Wifi 4k Usb HDMI Comando Voz 65um7470psa.awz',
                desc: 'R$ 3.989,90 '
            },
            item2: {
                img: img12,
                title: 'Mesa de Centro Retangular 1 Prateleira Antuérpia Siena Móveis Preto/Branco',
                desc: 'R$ 182,32'
            },
            item3: {
                img: img13,
                title: 'Sofá 4 Lugares Living Base de Madeira Linho Cotton',
                desc: 'R$ 1.328,99 '
            }
        },
        slide2: {
            item1: {
                img: img21,
                title: 'Mesa de Jantar Coimbra 140 Branca Cromado',
                desc: 'R$ 512,99'
            },
            item2: {
                img: img22,
                title: 'Forno Eletrico Sonetto 44L Inox Com Timer',
                desc: 'R$ 699,90'
            },
            item3: {
                img: img23,
                title: 'Kit Cozinha 3 Portas Vidro 3 Gavetas Telasul Star',
                desc: 'R$ 688,00'
            }
        },
        slide3: {
            item1: {
                img: img31,
                title: 'Cama Casal Madri Espresso Móveis Canion - Marrom Cacau',
                desc: 'R$ 387,99'
            },
            item2: {
                img: img32,
                title: 'Guarda Roupa Casal Munique e Armário Multiuso Elite Brilho - BRANCO',
                desc: 'R$ 753,63'
            },
            item3: {
                img: img33,
                title: 'Mesa de Cabeceira 4 Gavetas Luxo II EJ Móveis Branco',
                desc: 'R$ 140,90'
            }
        }
    };

    let [currentImg, setCurrentImg] = useState([]); // = useState([scpItemsContent.slide1.item1.img, scpItemsContent.slide1.item2.img, scpItemsContent.slide1.item3.img]);
    let [currentTitle, setCurrentTitle] = useState([]);
    let [currentDesc, setCurrentDesc] = useState([]);

    useEffect(() => {
        specC = document.getElementsByClassName('special-carousel');
        setWalkDist(prevValue => prevValue - specC[0].offsetWidth);
        specC[0].style.transform = 'translateX(' + -specC[0].offsetWidth + 'px)';
        setCounter(prevValue => prevValue + 1);
    }, [])

    useEffect(() => {
        specC = document.getElementsByClassName('special-carousel');
        specC[0].style.transform = 'translateX(' + walkDist + 'px)';
        updateImg(counter);
    }, [walkDist]);

    const updateImg = (counter) => {
        if (counter === 1) {
            setCurrentImg([scpItemsContent.slide1.item1.img, scpItemsContent.slide1.item2.img, scpItemsContent.slide1.item3.img]);
            setCurrentTitle([scpItemsContent.slide1.item1.title, scpItemsContent.slide1.item2.title, scpItemsContent.slide1.item3.title]);
            setCurrentDesc([scpItemsContent.slide1.item1.desc, scpItemsContent.slide1.item2.desc, scpItemsContent.slide1.item3.desc]);
        } else if (counter === 2) {
            setCurrentImg([scpItemsContent.slide2.item1.img, scpItemsContent.slide2.item2.img, scpItemsContent.slide2.item3.img]);
            setCurrentTitle([scpItemsContent.slide2.item1.title, scpItemsContent.slide2.item2.title, scpItemsContent.slide2.item3.title]);
            setCurrentDesc([scpItemsContent.slide2.item1.desc, scpItemsContent.slide2.item2.desc, scpItemsContent.slide2.item3.desc]);
        } else if (counter === 3) {
            setCurrentImg([scpItemsContent.slide3.item1.img, scpItemsContent.slide3.item2.img, scpItemsContent.slide3.item3.img]);
            setCurrentTitle([scpItemsContent.slide3.item1.title, scpItemsContent.slide3.item2.title, scpItemsContent.slide3.item3.title]);
            setCurrentDesc([scpItemsContent.slide3.item1.desc, scpItemsContent.slide3.item2.desc, scpItemsContent.slide3.item3.desc]);
        } else {
            setCurrentImg([scpItemsContent.slide1.item1.img, scpItemsContent.slide1.item2.img, scpItemsContent.slide1.item3.img]);
            setCurrentTitle([scpItemsContent.slide1.item1.title, scpItemsContent.slide1.item2.title, scpItemsContent.slide1.item3.title]);
            setCurrentDesc([scpItemsContent.slide1.item1.desc, scpItemsContent.slide1.item2.desc, scpItemsContent.slide1.item3.desc]);
        }
    }

    const nextFcn = () => {
        specC = document.getElementsByClassName('special-carousel');
        if (counter < specC[0].children.length - 1) {
            specC[0].style.transition = '1s ease all';
            setWalkDist(prevValue => prevValue - specC[0].offsetWidth);
            setCounter(prevValue => prevValue + 1);
        }
        //counterTeste += 1;*/
    }

    const prevFcn = () => {
        specC = document.getElementsByClassName('special-carousel');
        if (counter > 0) {
            specC[0].style.transition = '1s ease all';
            setWalkDist(prevValue => prevValue + specC[0].offsetWidth);
            setCounter(prevValue => prevValue - 1);
        }
    }

    const transEnd = () => {
        specC = document.getElementsByClassName('special-carousel');
        specC[0].style.transition = 'none';
        if (counter === specC[0].children.length - 1) {
            setWalkDist(-specC[0].offsetWidth);
            setCounter(1);
        }
        if (counter === 0) {
            setWalkDist(-specC[0].offsetWidth * (specC[0].children.length - 2));
            setCounter(specC[0].children.length - 2);
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
                    <img className='scp-img' src={currentImg[0]}></img>
                    <div className='scp-content'>
                        <h1 className='scp-title'>{currentTitle[0]}</h1>
                        <p className='scp-desc'>{currentDesc[0]}</p>
                    </div>
                </div>
                <div className='special-carousel-products sc-prod2'>
                    <img className='scp-img' src={currentImg[1]} ></img>
                    <div className='scp-content'>
                        <h1 className='scp-title'>{currentTitle[1]}</h1>
                        <p className='scp-desc'>{currentDesc[1]}</p>
                    </div>
                </div>
                <div className='special-carousel-products sc-prod3'>
                    <img className='scp-img' src={currentImg[2]}></img>
                    <div className='scp-content'>
                        <h1 className='scp-title'>{currentTitle[2]}</h1>
                        <p className='scp-desc'>{currentDesc[2]}</p>
                    </div>
                </div>
            </div>

            <div className='arrow-container left' onClick={prevFcn}>
                <i className="fas fa-chevron-left" ></i>
            </div>
            <div className='arrow-container right' onClick={() => { nextFcn(); }} >
                <i className="fas fa-chevron-right" ></i>
            </div>
        </div>
    )
}

export default SpecialCarousel