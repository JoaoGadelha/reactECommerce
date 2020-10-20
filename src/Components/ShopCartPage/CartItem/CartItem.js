import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../../../Context'
import styles from './CartItem.module.css'
import { postData } from '../../Common/CommonFunctions'

const CartItem = (props) => {
    let { shopCart, setShopCart } = useContext(Context);
    let product = props.product;
    let [quantState, setQuantState] = useState(parseInt(product.quantity, 10));

    let updateCart = async () => {
        const data = await postData(`https://electroshopping-user-regist.herokuapp.com/setShopCart`, { quantCart: quantState });
    }
    
    const onChange = (e) => {
        e.preventDefault();
        setQuantState(parseInt(e.target.value, 10));
    }
    const increase = async (id) => {
        shopCart.forEach(async (el, i) => {
            if (el.id === id) {
                let aux = [...shopCart];
                aux[i].quantity = aux[i].quantity + 1;
                await setShopCart(aux);
                await setQuantState(prev => prev + 1);
                await updateCart();
            }
        }
        )
    }

    const decrease = async (id) => {
        shopCart.forEach(async (el, i) => {
            if (el.id === id) {
                let aux = [...shopCart];
                if (aux[i].quantity > 1) {
                    aux[i].quantity = aux[i].quantity - 1;
                    await setShopCart(aux);
                    await setQuantState(prev => prev - 1);
                } else {
                    aux.splice(i, 1);
                    await setShopCart(aux);
                    await setQuantState(0);
                }
                await updateCart();
            }
        }
        )
    }

    const remove = async (element) => {
        shopCart.forEach( async (el, i) => {
            if (el.id === element) {
                let aux = [...shopCart];
                aux.splice(i, 1);
                await setShopCart(aux);
                updateCart();
            }
        })
    }

    return (
        <div class={styles.container}>
            <img src={product.image}></img>
            <div class={styles.prodQnt}>
                <h1><input value={quantState} onChange={onChange} class={styles.inputQuantity}></input></h1>
                <div class={styles.btnCont}>
                    <button onClick={() => {
                        increase(product.id);
                    }} class={styles.btnMore}>+</button>
                    <button onClick={() => {
                        decrease(product.id);
                    }} class={styles.btnLess}>-</button>
                </div>
            </div>
            <h1>{parseFloat(product.price, 10).toFixed(2)}</h1>
            <h1>{parseFloat(product.price * quantState, 10).toFixed(2)}</h1>
            <button onClick={() => {
                remove(product.id);
            }} class={styles.removeBtn}>Remove</button>
        </div>
    )
}

export default CartItem