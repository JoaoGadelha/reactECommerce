import React, { useEffect } from "react";
import { useState } from "react";
import { postData } from './Components/Common/CommonFunctions'

export const Context = React.createContext();

export const Provider = (props) => {
  let [searchResult, setSearchResult] = useState([]);
  let [currentProduct, setCurrentProduct] = useState({});
  let [userId, setUserId] = useState('');
  let [saveProduct, setSaveProduct] = useState({});
  let [shopCart, setShopCart] = useState([]);
  let [firstRender, setFirstRender] = useState(true);



  /* const setIdTitleVec = () => {
    for (var key in searchResult) {
      if (searchResult.hasOwnProperty(key))
        return searchResult[Object.keys(searchResult)[0]];
    }
    return [];
  };
 */

  return (
    <Context.Provider value={{
      searchResult, setSearchResult,
      currentProduct, setCurrentProduct,
      userId, setUserId, shopCart, setShopCart, saveProduct, setSaveProduct
    }}>
      {props.children}
    </Context.Provider>
  );
};

export default Provider;