import React from 'react'

const ProductItem = ({img, title, price}) => {
    console.log(title,price);
    return (
        <div className='product-item'>
            <img src={img}></img>
            <span>{title}</span>
            <span>{price}</span>
        </div>
    )
}

export default ProductItem