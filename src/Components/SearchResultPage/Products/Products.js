import React, { useState, useEffect } from 'react'
import ProductItem from './ProductItem'
import './Products.css'

const Products = (props) => {

    //let myRef = useRef();
    let searchResult = props.searchResult;
    let newI;
    let nItemsPerRow = 4;
    let nRowsPerLoad = 3;
    let newImg;
    let [productList, setProductList] = useState([]);
    let [isRender1, setIsRender1] = useState(true);
    let [isRender2, setIsRender2] = useState(true);
    let [isRender3, setIsRender3] = useState(true);
    let count = 0;

    // let counter = 1;
    let [seqFlag, setSeqFlag] = useState(false);

    useEffect(() => {
        console.log('hello');
        console.log(isRender1);
        if (!isRender1) {
            console.log('ue1: ' + seqFlag);
            setSeqFlag(true);
            //counter += 1;
            //  console.log('counterUE: ' + counter);
            // setProductList([]);
        }
        //isRender1 = false;
        setIsRender1(false);
    }, [searchResult]);

    useEffect(() => {
        if (!isRender2) {
            if (seqFlag === true) {
                console.log('ue2: ' + seqFlag);
                setProductList([]);
            }
        }
        setIsRender2(false);
    }, [seqFlag]);

    useEffect(() => {
        if (!isRender3) {
            //counter += 1000;
            if (seqFlag === true) {
                console.log('ue3: ' + seqFlag);
                setProductsListFunction();
            }
        }
        //isRender2 = false;
        setIsRender3(false);
    }, [productList]);


    let products = {};

    const populateProducts = () => {
        for (let i = 0; i < nRowsPerLoad; i++) {
            for (let j = 0; j < nItemsPerRow; j++) {

            }
        }
    }


    const createNewItem = () => {
        newI = document.createElement('div');
        newI.className = 'product-item';
        newImg = document.createElement('img');
        newImg.src = '';
        newI.appendChild(newImg);
        return newI;
    }

    // setInterval(() => {
    //counter = counter + 10;
    //console.log('SIcounter: ' + counter);
    //}, 5000)

    const setProductsListFunction = () => {
        console.log('ue4: ' + seqFlag);
        let productListAuxArray = [];
        if (searchResult.length !== 0 && Array.isArray(searchResult) && seqFlag === true) {



            console.log('ue5: ' + seqFlag);
            for (let i = 0; i < searchResult.length; i++) {
                productListAuxArray.push(
                        <ProductItem img={searchResult[i].image} title={searchResult[i].title} oldPrice={searchResult[i].oldPrice} price={searchResult[i].price} />
                );

                console.log(productListAuxArray);
                setProductList(productListAuxArray);
            }
            setSeqFlag(false);
        }
    }



    const addMoreProducts = () => {
        //for (let j = 0; j < nRowsPerLoad; j++) {
        //    for (let i = 0; i < nItemsPerRow; i++) {
        //        myRef.current.appendChild(createNewItem());
        //    }
        //}




        setProductList(productList.concat(
            <>
                <ProductItem img={''} title={''} oldPrice={''} price={''} />
                <ProductItem img={''} title={''} oldPrice={''} price={''} />
                <ProductItem img={''} title={''} oldPrice={''} price={''} />
                <ProductItem img={''} title={''} oldPrice={''} price={''} />
                <ProductItem img={''} title={''} oldPrice={''} price={''} />
                <ProductItem img={''} title={''} oldPrice={''} price={''} />
                <ProductItem img={''} title={''} oldPrice={''} price={''} />
                <ProductItem img={''} title={''} oldPrice={''} price={''} />
                <ProductItem img={''} title={''} oldPrice={''} price={''} />
                <ProductItem img={''} title={''} oldPrice={''} price={''} />
                <ProductItem img={''} title={''} oldPrice={''} price={''} />
                <ProductItem img={''} title={''} oldPrice={''} price={''} />
            </>));

    }
    /*  <ProductItem img={searchResult[1].image} title={searchResult[1].title} price={searchResult[1].price} />
                        <ProductItem img={searchResult[2].image} title={searchResult[2].title} price={searchResult[2].price} />
                        <ProductItem img={searchResult[3].image} title={searchResult[3].title} price={searchResult[3].price} />
                        <ProductItem img={searchResult[4].image} title={searchResult[4].title} price={searchResult[4].price} />
                        <ProductItem img={searchResult[5].image} title={searchResult[5].title} price={searchResult[5].price} />
                        <ProductItem img={searchResult[6].image} title={searchResult[6].title} price={searchResult[6].price} />
                        <ProductItem img={searchResult[7].image} title={searchResult[7].title} price={searchResult[7].price} />
                        <ProductItem img={searchResult[8].image} title={searchResult[8].title} price={searchResult[8].price} />
                        <ProductItem img={searchResult[9].image} title={searchResult[9].title} price={searchResult[9].price} />
                        <ProductItem img={searchResult[10].image} title={searchResult[10].title} price={searchResult[10].price} />
                        <ProductItem img={searchResult[11].image} title={searchResult[11].title} price={searchResult[11].price} /> */
    if (searchResult.length !== 0 && Array.isArray(searchResult)) {
        //console.log(searchResult);
        return (
            <div className='products-container'>
                <h1>Search Results</h1>
                <div className='products-grid'>
                    {productList}
                </div>
                <button onClick={addMoreProducts}> Load more products</button>
            </div>
        )
    } else {
        return (
            <div className='products-container'>
                <h1>Search Results</h1>
                <div className='products-grid'>
                    <ProductItem img={''} title={''} oldPrice={''} price={''} />
                    <ProductItem img={''} title={''} oldPrice={''} price={''} />
                    <ProductItem img={''} title={''} oldPrice={''} price={''} />
                    <ProductItem img={''} title={''} oldPrice={''} price={''} />
                    <ProductItem img={''} title={''} oldPrice={''} price={''} />
                    <ProductItem img={''} title={''} oldPrice={''} price={''} />
                    <ProductItem img={''} title={''} oldPrice={''} price={''} />
                    <ProductItem img={''} title={''} oldPrice={''} price={''} />
                    <ProductItem img={''} title={''} oldPrice={''} price={''} />
                    <ProductItem img={''} title={''} oldPrice={''} price={''} />
                    <ProductItem img={''} title={''} oldPrice={''} price={''} />
                    <ProductItem img={''} title={''} oldPrice={''} price={''} />
                    {productList}
                </div>
                <button onClick={addMoreProducts}> Load more products</button>
            </div>
        );
    }

}

export default Products