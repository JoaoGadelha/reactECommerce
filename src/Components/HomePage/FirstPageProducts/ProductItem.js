import React from 'react'
import styles from './ProductItem.module.css'

const ProductItem = ({img, title, price, oldPrice}) => {
    
    return (
        <div className={styles.productItem}>
            <img src={img}></img>
            <span>{title}</span>
            <span>{oldPrice}</span>
            <span>{price}</span>
        </div>
    )
}

export default ProductItem