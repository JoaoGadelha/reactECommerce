import React from 'react'

const CartItem = (props) => {
    let product = props.product;
    let index = props.index;
    let array = props.array;
    console.log(product);
    return (
        <div>
            <img src={product.image}></img>
            <h1>{product.quantity}</h1>
            <h1>{product.price}</h1>
            <h1>{product.price*product.quantity}</h1>
            <button onClick={()=>{

            }}>Remove</button>
        </div>
    )
}

export default CartItem