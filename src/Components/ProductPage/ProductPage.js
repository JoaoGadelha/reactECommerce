import React, { useContext, useEffect } from 'react'
import { Context } from '../../Context'
import styles from './ProductPage.module.css';

const ProductPage = ({ match }) => {
    let [searchResult, setSearchResult, currentProduct, setCurrentProduct, apiKey, flag, setFlag] = useContext(Context);

    useEffect(() => {
        fetch('https://api-do-joao.herokuapp.com/find/id/' + match.params.id).then(res => res.json()).then(res => setSearchResult(res));
    }, []);

    if (Array.isArray(searchResult) && searchResult.length > 0) {
        return (
            // <h1>{searchResult[0].title}</h1>
            <div className={styles.container}>
                <h2 class={styles.title}>{searchResult[0].title}</h2>
                <div class={styles.imagesContainer}>
                    <img class={styles.mainImage} src={searchResult[0].image[0]}>
                    </img>
                </div>
                <div class={styles.content}>
                    <div class={styles.pricesCont}>
                        <div>
                            <span class={styles.oldPriceLabel}>Old price:</span> <span class={styles.oldPrice}>{searchResult[0].oldPrice}</span>
                        </div>
                        <span class={styles.price}>$ {searchResult[0].price}</span>
                    </div>
                    <button class={styles.addCartBtn}>Add to Cart</button>
                </div>
            </div>
        )
    } else {
        console.log(searchResult);
        return (
            <h1>Empty</h1>
        )
    }
}

export default ProductPage