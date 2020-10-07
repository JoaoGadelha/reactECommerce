import React, { useContext, useEffect, useState } from 'react'
import styles from './ShopCartPage.module.css'
import { Context } from '../../Context'
import { emptyObj } from '../Common/CommonFunctions'
import { postData, useIsFirstRender } from '../Common/CommonFunctions'
import CartItem from './CartItem'


const ShopCartPage = () => {
    let { userId, shopCart, setShopCart } = useContext(Context);
    let reqBody = { userId: userId };
    let [prodList, setProdList] = useState([]);
    let prodListAux = [];
    // let [firstRender1, setFirstRender1] = useState(true);
    // let [firstRender2, setFirstRender2] = useState(true);
    // let [firstRender3, setFirstRender3] = useState(true);
    let [auxState, setAuxState] = useState('');
    let isFirstRender = useIsFirstRender();
    let [fin1, setFin1] = useState(false); // finished function 1

    // fetches the id's of all products in the user's shopping cart
    useEffect(() => {
        postData(`https://electroshopping-user-regist.herokuapp.com/getShopCart/${userId}`, reqBody)
            .then(data => {
                let auxCart = [];
                for (let i = 0; i < data.shopCart.length; i++) {
                    auxCart[i] = {};
                    auxCart[i].id = data.shopCart[i];
                }
                setShopCart(auxCart); // JSON data parsed by `data.json()` call
            });
    }, [])

    useEffect(() => {
        console.log(isFirstRender);
        if (!isFirstRender &&
            shopCart[0].image === undefined &&
            shopCart[0].id !== undefined) {
            for (let i = 0; i < shopCart.length; i++) {
                fetch(`https://api-do-joao.herokuapp.com/find/id/${shopCart[i].id}`).
                then(res => res.json()).
                then(res => {
                    let aux = shopCart;
                    aux[i].image = res[0].image;
                    aux[i].title = res[0].title;
                    aux[i].price = res[0].price;
                    aux[i].oldPrice = res[0].oldPrice;
                    aux[i].type = res[0].type;
                    setShopCart(aux);
                    console.log(shopCart);
                });
            }
        }
    }, [shopCart]);

    


    if (shopCart !== undefined && Object.keys(shopCart).length > 0 && auxState !== '') {
        return (
            <div class={styles.container}>
                <h1>Product</h1><h1>Quantity</h1><h1>Unit price</h1><h1>Total price</h1><div></div>
            {
                shopCart.map(product => <CartItem key={product.id} product={product}/>)
            }
            </div>
        )
    } else {
        return (
            <div>Empty</div>
        )
    }
}

export default ShopCartPage