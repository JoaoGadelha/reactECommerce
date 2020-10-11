import React, { useContext, useEffect, useState } from 'react'
import styles from './ShopCartPage.module.css'
import { Context } from '../../Context'
import { postData, useIsFirstRender } from '../Common/CommonFunctions'
import CartItem from './CartItem/CartItem'

const ShopCartPage = () => {
    let { userId, shopCart, setShopCart } = useContext(Context);

    // fetches the id's and quantities of all products in the user's shopping cart
    // and assigns these values to the shopCart array
    // Each value of the shopCart array should be an object like this: {id:random_id, quantity:number_of_products }]
    useEffect(async () => {
        let auxCart = []; // auxiliary array that will receive the result of the fetch request
        // postData: performs a POST request with {userId:userId} as the body of the request
        const data = await postData(`https://electroshopping-user-regist.herokuapp.com/getShopCart/${userId}`, { userId: userId })
        for (let i = 0; i < data.shopCart.length; i++) {
            auxCart[i] = {};
            auxCart[i].id = data.shopCart[i].id; //this shopCart is not the same shopCart state variable. Just a value received from the database
            auxCart[i].quantity = data.shopCart[i].quantity;
        }
        let aux = [...auxCart]; // creates a copy of shopCart
        for (let i = 0; i < auxCart.length; i++) {
            // fetches the details of each product
            const res = await fetch(`https://api-do-joao.herokuapp.com/find/id/${auxCart[i].id}`);
            const resData = await res.json();
            aux[i].image = resData[0].image;
            aux[i].title = resData[0].title;
            aux[i].price = resData[0].price;
            aux[i].oldPrice = resData[0].oldPrice;
            aux[i].type = resData[0].type;
        }
        setShopCart(aux);
    }, [])

    return (
        <div class={styles.container}>
            <h1>Product</h1><h1>Quantity</h1><h1>Unit price</h1><h1>Total price</h1><div></div>
            {
                shopCart.map((product, i, array) => <CartItem key={product.id} product={product} index={i} array={array} />)
            }
        </div>
    )
}
export default ShopCartPage