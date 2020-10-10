import React, { useContext, useEffect, useState } from 'react'
import styles from './ShopCartPage.module.css'
import { Context } from '../../Context'
import { postData, useIsFirstRender } from '../Common/CommonFunctions'
import CartItem from './CartItem/CartItem'


const ShopCartPage = () => {
    let { userId, shopCart, setShopCart } = useContext(Context);
    let isFirstRender = useIsFirstRender();
    let [runFlag, setRunFlag] = useState(false);
    let [count, setCount] = useState(0);

    // fetches the id's of all products in the user's shopping cart
    useEffect(() => {
        console.log('useEffect1');
        let auxCart = [];
        postData(`https://electroshopping-user-regist.herokuapp.com/getShopCart/${userId}`, { userId: userId })
            .then(data => {
                for (let i = 0; i < data.shopCart.length; i++) {
                    auxCart[i] = {};
                    auxCart[i].id = data.shopCart[i].id;
                    auxCart[i].quantity = data.shopCart[i].quantity;
                }
            });
        setShopCart(auxCart);
    }, [])

    useEffect(() => {

    })

    useEffect(() => {
        console.log('useEffect2');
        if (!isFirstRender) {
            console.log('cart');
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
                    });
            }
            setShopCart(aux);
        }
        console.log(shopCart);
    }, [runFlag]);

    useEffect(() => {
        if (count <= 2000) {
            setCount(prev => prev + 1);
        }
    }, [count])

    if (count >= 2000) {
        console.log(shopCart);
        return (
            <div class={styles.container}>
                <h1>{shopCart[0] !== undefined ? Object.keys(shopCart).length : 'empty'}</h1>
                <h1>Product</h1><h1>Quantity</h1><h1>Unit price</h1><h1>Total price</h1><div></div>
                {
                    shopCart.map((product, i, array) => <CartItem key={product.id} product={product} index={i} array={array} />)
                }
            </div>
        )
    } else {
        return (
            <div><h1>{count}</h1></div>
        )
    }
}
export default ShopCartPage