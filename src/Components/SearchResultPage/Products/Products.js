import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import "./Products.css";

const Products = (props) => {
  //let myRef = useRef();
  let searchResult = props.searchResult;
  let newI;
  let nItemsPerRow = 4;
  let nRowsPerLoad = 3;
  let newImg;
  let [productList, setProductList] = useState([]);
  //let [isRender1, setIsRender1] = useState(true);
  let [isRender2, setIsRender2] = useState(true);
  let [isRender3, setIsRender3] = useState(true);
  let count = 0;

  // let counter = 1;
  let [seqFlag, setSeqFlag] = useState(false);

  useEffect(() => {
    if (searchResult.length > 0 && Array.isArray(searchResult)) {
      setSeqFlag(true);
    }
    //counter += 1;
    //  console.log('counterUE: ' + counter);
    // setProductList([]);
    //isRender1 = false;
    //setIsRender1(false);
  }, [searchResult]);

  useEffect(() => {
    if (!isRender2) {
      if (seqFlag === true) {
        setProductList([]);
      }
    }
    setIsRender2(false);
  }, [seqFlag]);

  useEffect(() => {
    if (!isRender3) {
      //counter += 1000;
      if (seqFlag === true) {
        setProductsListFunction();
      }
    }
    //isRender2 = false;
    setIsRender3(false);
  }, [productList]);

  let products = {};

  const populateProducts = () => {
    for (let i = 0; i < nRowsPerLoad; i++) {
      for (let j = 0; j < nItemsPerRow; j++) {}
    }
  };

  const createNewItem = () => {
    newI = document.createElement("div");
    newI.className = "product-item";
    newImg = document.createElement("img");
    newImg.src = "";
    newI.appendChild(newImg);
    return newI;
  };

  // setInterval(() => {
  //counter = counter + 10;
  //console.log('SIcounter: ' + counter);
  //}, 5000)

  const setProductsListFunction = () => {
    let productListAuxArray = [];
    if (
      searchResult.length !== 0 &&
      Array.isArray(searchResult) &&
      seqFlag === true
    ) {
      for (let i = 0; i < searchResult.length; i++) {
        productListAuxArray.push(
          <ProductItem
            id={searchResult[i]._id}
            img={searchResult[i].image}
            title={searchResult[i].title}
            oldPrice={searchResult[i].oldPrice}
            price={searchResult[i].price}
          />
        );

        setProductList(productListAuxArray);
      }
      setSeqFlag(false);
    }
  };

  return (
    <div className="products-container">
      <h1>Search Results</h1>
      <div className="products-grid">{productList}</div>
    </div>
  );
};

export default Products;
