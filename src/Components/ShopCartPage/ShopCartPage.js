import React, { useContext, useEffect, useState } from 'react'
import styles from './ShopCartPage.module.css'
import { Context } from '../../Context'
import { emptyObj } from '../Common/CommonFunctions'
import { postData, useIsFirstRender } from '../Common/CommonFunctions'
import CartItem from './CartItem'


const ShopCartPage = () => {
    let { userId, shopCart, setShopCart } = useContext(Context);
    let reqBody = { userId: userId };
    let isFirstRender = useIsFirstRender();
    let [runFlag, setRunFlag] = useState(false);
    let [count, setCount] = useState(1);

    // fetches the id's of all products in the user's shopping cart
    useEffect(() => {
        postData(`https://electroshopping-user-regist.herokuapp.com/getShopCart/${userId}`, reqBody)
            .then(data => {
                let auxCart = [];
                for (let i = 0; i < data.shopCart.length; i++) {
                    auxCart[i] = {};
                    auxCart[i].id = data.shopCart[i].id;
                    auxCart[i].quantity = data.shopCart[i].quantity;
                }
                setShopCart(auxCart); // JSON data parsed by `data.json()` call
            });
    }, [])

    useEffect(() => {
        if (!isFirstRender && shopCart[0] !== undefined && Object.keys(shopCart[0]).length === 2 && runFlag === false)
            setRunFlag(true);
    }, [shopCart])

    useEffect(() => {
        console.log('cart');
        console.log(shopCart.length);
        if (!isFirstRender && runFlag) {
            for (let i = 0; i < shopCart.length; i++) {
                fetch(`https://api-do-joao.herokuapp.com/find/id/${shopCart[i].id}`).
                    then(res => res.json()).
                    then(res => {
                        let aux = shopCart;
                        console.log(aux[i], res[0]);
                        aux[i].image = res[0].image;
                        aux[i].title = res[0].title;
                        aux[i].price = res[0].price;
                        aux[i].oldPrice = res[0].oldPrice;
                        aux[i].type = res[0].type;
                        setShopCart(aux);
                    });
            }
        }
    }, [runFlag]);

    useEffect(() => {
        if(count <= 2001){
        setCount(prev => prev + 1);
        }
        console.log(count);
    }, [count])

    if (count >= 2000) {
        console.log(shopCart);
        return (
            <div class={styles.container}>
                <h1>Product</h1><h1>Quantity</h1><h1>Unit price</h1><h1>Total price</h1><div></div>
                {
                    shopCart.map((product, i, array)   => <CartItem key={product.id} product={product} index={i} array={array}/>)
                }
            </div>
        )
    } else {

        return (

            <div><button onClick={() => {
                console.log(shopCart[0].price);
            }}>Show</button></div>
        )
    }
}

export default ShopCartPage