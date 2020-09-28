import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, img, title, oldPrice, price }) => {
    let prodPage = '/product/' + id;

    return (
        <>
            {
                (title.length !== 0) ? <div className='product-item'>
                    <Link to={prodPage}><img src={img} ></img></Link>
                    <span>{title}</span>
                    {
                        oldPrice.length !== 0 ?
                            <span>$ {oldPrice}</span>
                            : <span></span>
                    }
                    <span>$ {price}</span>
                </div> : <div></div>
            }
        </>
    )
}

export default ProductItem