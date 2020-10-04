

        const filteredSearchResult = (searchResult) => {
            console.log(searchResult);
        }

       const emptyObj = (obj) => {
           if(obj === undefined) return true;
        return (Object.keys(obj).length === 0);
       }

        export {filteredSearchResult, emptyObj};