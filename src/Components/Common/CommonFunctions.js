import { useRef, useEffect } from 'react';

export const useIsFirstRender = () => {
  const isMountRef = useRef(true);
  useEffect(() => {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
};

const filteredSearchResult = (searchResult) => {
    console.log(searchResult);
}

const emptyObj = (obj) => {
    if (obj === undefined) return true;
    return (Object.keys(obj).length === 0);
}

// used to send a POST message to the server
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
            //'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

export { filteredSearchResult, emptyObj, postData };