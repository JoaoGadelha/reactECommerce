import React from 'react'

const ProductItem = ({img, title, oldPrice, price}) => {
    return (
        <div className='product-item'>
            <img src={img}></img>
            <span>{title}</span>
            <span>{oldPrice}</span>
            <span>{price}</span>
        </div>
    )
}

export default ProductItem