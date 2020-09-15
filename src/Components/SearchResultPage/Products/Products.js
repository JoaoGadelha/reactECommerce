import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react'
import ProductItem from './ProductItem'
import './Products.css'

const Products = (props) => {

    //let myRef = useRef();
    let searchResult = props.searchResult;
    let newGridRow = [];
    let newI;
    let nItemsPerRow = 4;
    let nRowsPerLoad = 3;
    let newImg;
    let titleArray = [];
    let [priceArray, setPriceArray] = useState([]);
    let copyState = [];
    let [productList, setProductList] = useState([]);

    let products = {};

    const populateProducts = () => {
        for (let i = 0; i < nRowsPerLoad; i++) {
            for (let j = 0; j < nItemsPerRow; j++) {

            }
        }
    }

    useEffect(() => {
        
    }, [searchResult]);

    const createNewItem = () => {
        newI = document.createElement('div');
        newI.className = 'product-item';
        newImg = document.createElement('img');
        newImg.src = '';
        newI.appendChild(newImg);
        return newI;
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

    if (!(Object.keys(searchResult).length === 0 && searchResult.constructor === Object)) {
        console.log(searchResult);
        return (
            <div className='products-container'>
                <h1>Search Results</h1>
                <div className='products-grid'>
                    <ProductItem img={searchResult[0].image} title={searchResult[0].title} price={searchResult[0].price.raw} />
                    <ProductItem img={searchResult[1].image} title={searchResult[1].title} price={searchResult[1].price.raw} />
                    <ProductItem img={searchResult[2].image} title={searchResult[2].title} price={searchResult[2].price.raw} />
                    <ProductItem img={searchResult[3].image} title={searchResult[3].title} price={searchResult[3].price.raw} />
                    <ProductItem img={searchResult[4].image} title={searchResult[4].title} price={searchResult[4].price.raw} />
                    <ProductItem img={searchResult[5].image} title={searchResult[5].title} price={searchResult[5].price.raw} />
                    <ProductItem img={searchResult[6].image} title={searchResult[6].title} price={searchResult[6].price.raw} />
                    <ProductItem img={searchResult[7].image} title={searchResult[7].title} price={searchResult[7].price.raw} />
                    <ProductItem img={searchResult[8].image} title={searchResult[8].title} price={searchResult[8].price.raw} />
                    <ProductItem img={searchResult[9].image} title={searchResult[9].title} price={searchResult[9].price.raw} />
                    <ProductItem img={searchResult[10].image} title={searchResult[10].title} price={searchResult[10].price.raw} />
                    <ProductItem img={searchResult[11].image} title={searchResult[11].title} price={searchResult[11].price.raw} />
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