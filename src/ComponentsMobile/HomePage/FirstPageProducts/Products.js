import React, { useState, useEffect } from 'react'
import img11 from './FirstPageProducts_img/items/slide1/img11'
import img12 from './FirstPageProducts_img/items/slide1/img12'
import img13 from './FirstPageProducts_img/items/slide1/img13'
import img21 from './FirstPageProducts_img/items/slide2/img21'
import img22 from './FirstPageProducts_img/items/slide2/img22'
import img23 from './FirstPageProducts_img/items/slide2/img23'
import img31 from './FirstPageProducts_img/items/slide3/img31'
import img32 from './FirstPageProducts_img/items/slide3/img32'
import img33 from './FirstPageProducts_img/items/slide3/img33'
import ProductItem from './ProductItem'
import './Products.css'

const Products = () => {

    //let myRef = useRef();
    let newGridRow = [];
    let newI;
    let nItemsPerRow = 4;
    let nRowsPerLoad = 3;
    let imgArray = [img11, img12, img13, img21, img22, img23, img31, img32, img33];
    let randArray = [];
    let newImg;
    let randImg1,
        randImg2,
        randImg3,
        randImg4,
        randTitle1,
        randTitle2,
        randTitle3,
        randTitle4,
        randPrice1,
        randPrice2,
        randPrice3,
        randPrice4,
        randOldPrice1,
        randOldPrice2,
        randOldPrice3,
        randOldPrice4;
    let titleArray = [];

    let [productList, setProductList] = useState([]);

    useEffect(() => {
    }, [productList]);

    const createNewItem = () => {
        newI = document.createElement('div');
        newI.className = 'product-item';
        newImg = document.createElement('img');
        newImg.src = imgArray[Math.floor(Math.random() * 9)];
        newI.appendChild(newImg);
        return newI;
    }



    const addMoreProducts = () => {
        //for (let j = 0; j < nRowsPerLoad; j++) {
        //    for (let i = 0; i < nItemsPerRow; i++) {
        //        myRef.current.appendChild(createNewItem());
        //    }
        //}
       
        for (let i = 0; i < nItemsPerRow*nRowsPerLoad; i++) {
            randArray[i] = Math.floor(Math.random()*9);
            console.log(randArray[i]);
        }


        setProductList(productList.concat(
            <>
                <ProductItem img={imgArray[randArray[0]]} title={'TV 65 Polegadas LG LED Smart Wifi 4k Usb HDMI Comando Voz 65um7470psa.awz'} oldPrice = {'$ 1349.90'} price={'$ 1199.90'} />
                <ProductItem img={imgArray[randArray[1]]} title={'TV 65 Polegadas LG LED Smart Wifi 4k Usb HDMI Comando Voz 65um7470psa.awz'} oldPrice = {'$ 1349.90'} price={'$ 1199.90'} />
                <ProductItem img={imgArray[randArray[2]]} title={'TV 65 Polegadas LG LED Smart Wifi 4k Usb HDMI Comando Voz 65um7470psa.awz'}  oldPrice = {'$ 1349.90'} price={'$ 1199.90'} />
                <ProductItem img={imgArray[randArray[3]]} title={'TV 65 Polegadas LG LED Smart Wifi 4k Usb HDMI Comando Voz 65um7470psa.awz'}  oldPrice = {'$ 1349.90'} price={'$ 1199.90'} />
                <ProductItem img={imgArray[randArray[4]]} title={'TV 65 Polegadas LG LED Smart Wifi 4k Usb HDMI Comando Voz 65um7470psa.awz'} oldPrice = {'$ 1349.90'} price={'$ 1199.90'} />
                <ProductItem img={imgArray[randArray[5]]} title={'TV 65 Polegadas LG LED Smart Wifi 4k Usb HDMI Comando Voz 65um7470psa.awz'} oldPrice = {'$ 1349.90'} price={'$ 1199.90'} />
                <ProductItem img={imgArray[randArray[6]]} title={'TV 65 Polegadas LG LED Smart Wifi 4k Usb HDMI Comando Voz 65um7470psa.awz'} oldPrice = {'$ 1349.90'} price={'$ 1199.90'} />
                <ProductItem img={imgArray[randArray[7]]} title={'TV 65 Polegadas LG LED Smart Wifi 4k Usb HDMI Comando Voz 65um7470psa.awz'} oldPrice = {'$ 1349.90'} price={'$ 1199.90'} />
                <ProductItem img={imgArray[randArray[8]]} title={'TV 65 Polegadas LG LED Smart Wifi 4k Usb HDMI Comando Voz 65um7470psa.awz'} oldPrice = {'$ 1349.90'} price={'$ 1199.90'} />
                <ProductItem img={imgArray[randArray[0]]} title={'TV 65 Polegadas LG LED Smart Wifi 4k Usb HDMI Comando Voz 65um7470psa.awz'} oldPrice = {'$ 1349.90'} price={'$ 1199.90'} />
                <ProductItem img={imgArray[randArray[1]]} title={'TV 65 Polegadas LG LED Smart Wifi 4k Usb HDMI Comando Voz 65um7470psa.awz'} oldPrice = {'$ 1349.90'} price={'$ 1199.90'} />
                <ProductItem img={imgArray[randArray[2]]} title={'TV 65 Polegadas LG LED Smart Wifi 4k Usb HDMI Comando Voz 65um7470psa.awz'} oldPrice = {'$ 1349.90'} price={'$ 1199.90'} /></>));

    }

    return (
        <div className='products-container-mobile'>
            <h1>New Products for You</h1>
            <div className='products-grid'>
                <ProductItem img={img11} title={'TV 65 Polegadas LG LED Smart Wifi 4k Usb HDMI Comando Voz 65um7470psa.awz'} oldPrice = {'$ 1349.90'} price={'$ 1199.90'} />
                <ProductItem img={img21} title={'TV 65 Polegadas LG LED Smart Wifi 4k Usb HDMI Comando Voz 65um7470psa.awz'} oldPrice = {'$ 1349.90'} price={'$ 1199.90'} />
                <ProductItem img={img31} title={'TV 65 Polegadas LG LED Smart Wifi 4k Usb HDMI Comando Voz 65um7470psa.awz'} oldPrice = {'$ 1349.90'} price={'$ 1199.90'} />
                <ProductItem img={img21} title={'TV 65 Polegadas LG LED Smart Wifi 4k Usb HDMI Comando Voz 65um7470psa.awz'} oldPrice = {'$ 1349.90'} price={'$ 1199.90'} />
                <ProductItem img={img22} title={'TV 65 Polegadas LG LED Smart Wifi 4k Usb HDMI Comando Voz 65um7470psa.awz'} oldPrice = {'$ 1349.90'} price={'$ 1199.90'} />
                <ProductItem img={img23} title={'TV 65 Polegadas LG LED Smart Wifi 4k Usb HDMI Comando Voz 65um7470psa.awz'} oldPrice = {'$ 1349.90'} price={'$ 1199.90'} />
                <ProductItem img={img31} title={'TV 65 Polegadas LG LED Smart Wifi 4k Usb HDMI Comando Voz 65um7470psa.awz'} oldPrice = {'$ 1349.90'} price={'$ 1199.90'} />
                <ProductItem img={img32} title={'TV 65 Polegadas LG LED Smart Wifi 4k Usb HDMI Comando Voz 65um7470psa.awz'} oldPrice = {'$ 1349.90'} price={'$ 1199.90'} />
                <ProductItem img={img33} title={'TV 65 Polegadas LG LED Smart Wifi 4k Usb HDMI Comando Voz 65um7470psa.awz'} oldPrice = {'$ 1349.90'} price={'$ 1199.90'} />
                <ProductItem img={img11} title={'TV 65 Polegadas LG LED Smart Wifi 4k Usb HDMI Comando Voz 65um7470psa.awz'} oldPrice = {'$ 1349.90'} price={'$ 1199.90'} />
                <ProductItem img={img12} title={'TV 65 Polegadas LG LED Smart Wifi 4k Usb HDMI Comando Voz 65um7470psa.awz'} oldPrice = {'$ 1349.90'} price={'$ 1199.90'} />
                <ProductItem img={img13} title={'TV 65 Polegadas LG LED Smart Wifi 4k Usb HDMI Comando Voz 65um7470psa.awz'} oldPrice = {'$ 1349.90'} price={'$ 1199.90'} />
                {productList}
            </div>
            <button onClick={addMoreProducts}> Load more products</button>
        </div>
    )

}

export default Products