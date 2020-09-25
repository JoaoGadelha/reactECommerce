import React, { useEffect } from "react";
import { useState } from "react";

export const Context = React.createContext();

export const Provider = (props) => {
  let [searchResult, setSearchResult] = useState({});
  let [currentProduct, setCurrentProduct] = useState({});
  //let apiKey = "B72D4C4480C347D8B9B82F07AD623FBE"; // Remove api key from here. This is not safe.
  let apiKey = 'E1037F0020A144018FC111B6011BE147';

  /* const setIdTitleVec = () => {
    for (var key in searchResult) {
      if (searchResult.hasOwnProperty(key))
        return searchResult[Object.keys(searchResult)[0]];
    }
    return [];
  };
 */

  return (
    <Context.Provider value={[searchResult, setSearchResult, currentProduct, setCurrentProduct, apiKey]}>
      {props.children}
    </Context.Provider>
  );
};

export default Provider;
