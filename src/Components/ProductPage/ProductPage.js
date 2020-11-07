import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../Context'
import styles from './ProductPage.module.css';
import { Redirect } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { postData } from '../Common/CommonFunctions'


const ProductPage = ({ match }) => {
    let renderOldPrice;
    let [mainImage, setMainImage] = useState('');
    let [isRender1, setIsRender1] = useState(true);
    let [productInfo, setProductInfo] = useState([]);
    let { userId, saveProduct, setSaveProduct } = useContext(Context);
    const history = useHistory();

    useEffect(() => {
        fetch('https://api-do-joao.herokuapp.com/find/id/' + match.params.id).then(res => res.json()).then(res => setProductInfo(res));
        renderOldPrice = true;
    }, []);

    useEffect(() => {
        if (!isRender1) {
            if (Array.isArray(productInfo) && productInfo.length > 0) {
                setMainImage(productInfo[0].image[0]);
            }
        }
        setIsRender1(false);
    }, [productInfo])

    const redirect = async () => {
        console.log(userId);
        if (userId === '') {
            setSaveProduct({ quantity: 1, id: match.params.id });
            history.push("/signup");
        } else {

            console.log(match.params.id);
            await postData('https://electroshopping-user-regist.herokuapp.com/setShopCart', { quantity: 1, id: match.params.id, userId: userId });
            history.push("/shopcart");
        }
    }

    const changeImage = (imageIndex) => {
        console.log('changeImage');
        setMainImage(productInfo[0].image[imageIndex - 1])
    }

    if (Array.isArray(productInfo) && productInfo.length > 0) {
        if (productInfo[0].oldPrice === '') {
            renderOldPrice = false;
        }

        return (
            // <h1>{productInfo[0].title}</h1>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    {/* <div className={styles.imagesContainer}> */}
                    <img className={styles.mainImage} src={mainImage}>
                    </img>
                    {/* </div> */}
                    <div>
                        <h2 className={styles.title}>{productInfo[0].title}</h2>
                        <div className={styles.content}>
                            <div className={styles.pricesCont}>
                                <div>
                                    {productInfo[0].oldPrice !== '' ?
                                        <>
                                            <span className={styles.oldPriceLabel}>Old price:</span> <span className={styles.oldPrice}>{productInfo[0].oldPrice}</span>
                                        </> : ''
                                    }
                                </div>
                                <span className={styles.price}>$ {productInfo[0].price}</span>
                            </div>
                            <button className={styles.addCartBtn} onClick={redirect}>Add to Cart</button>
                        </div>
                    </div>
                    <div className={styles.imagesContainer}>
                        <img className={styles.smallImage} src={productInfo[0].image[0]} onClick={() => changeImage(1)}></img>
                        <img className={styles.smallImage} src={productInfo[0].image[1]} onClick={() => changeImage(2)}></img>
                        <img className={styles.smallImage} src={productInfo[0].image[2]} onClick={() => changeImage(3)}></img>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <h1>Empty</h1>
        )
    }
}

export default ProductPage