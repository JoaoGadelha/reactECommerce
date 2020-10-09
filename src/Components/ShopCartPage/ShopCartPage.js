import React, { useContext, useEffect, useState } from 'react'
import styles from './ShopCartPage.module.css'
import { Context } from '../../Context'
import { postData, useIsFirstRender } from '../Common/CommonFunctions'
import CartItem from './CartItem/CartItem'


const ShopCartPage = () => {
    let { userId, shopCart, setShopCart } = useContext(Context);
    let reqBody = { userId: userId };
    let isFirstRender = useIsFirstRender();
    let [runFlag, setRunFlag] = useState(false);

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
        console.log('cart');
        console.log(shopCart.length);
        if (!isFirstRender && shopCart[0] !== undefined && Object.keys(shopCart[0]).length === 2) {
            let aux = [...shopCart];
            for (let i = 0; i < shopCart.length; i++) {
                fetch(`https://api-do-joao.herokuapp.com/find/id/${shopCart[i].id}`).
                    then(res => res.json()).
                    then(res => {
                        aux[i].image = res[0].image;
                        aux[i].title = res[0].title;
                        aux[i].price = res[0].price;
                        aux[i].oldPrice = res[0].oldPrice;
                        aux[i].type = res[0].type;
                        setShopCart(aux);
                    });
            }
        }
    }, [shopCart]);

    useEffect(() => {
        console.log('aaa');
        console.log(shopCart)
        if (shopCart[0] !== undefined && Object.keys(shopCart[0]).length > 2) {
            console.log('bbb');
            if (shopCart[1] !== undefined && Object.keys(shopCart[1]).length > 2) {
                console.log('ccc');
                if (shopCart[2] !== undefined && Object.keys(shopCart[2]).length > 2) {
                    console.log('ddd');
                    setRunFlag(true);
                }
            }
        }
    }, [shopCart]);

    if (runFlag) {
        return (
            <div class={styles.container}>
                <h1>Product</h1><h1>Quantity</h1><h1>Unit price</h1><h1>Total price</h1><div></div>
                {
                    shopCart.map((product, i, array) => <CartItem key={product.id} product={product} index={i} array={array} />)
                }
            </div>
        )
    } else {
        console.log(shopCart);
        return (
            <div>
                <h1>{runFlag ? 'true' : 'false'}</h1>
                <button onClick={() => {
                    console.log(shopCart[0].price);
                }}>Show</button></div>
        )
    }
}

export default ShopCartPage