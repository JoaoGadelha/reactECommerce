import React, { useContext } from 'react'
import { Context } from '../../Context'

const CartItem = (props) => {
    let { shopCart, setShopCart } = useContext(Context);
    let product = props.product;

    const decrease = (element) => {
        shopCart.forEach((el, i) => {
            if (el.hasOwnProperty('id')) {
                if (el.id === element) {
                    let aux = shopCart;
                    aux.splice(i, 1);
                    setShopCart(aux);
                    console.log(aux, shopCart);
                }
            }
        })
    }

    return (
        <div>
            <img src={product.image}></img>
            <h1>{product.quantity}</h1>
            <h1>{product.price}</h1>
            <h1>{product.price * product.quantity}</h1>
            <button onClick={() => {
                decrease(product.id);
            }}>Remove</button>
        </div>
    )
}

export default CartItem