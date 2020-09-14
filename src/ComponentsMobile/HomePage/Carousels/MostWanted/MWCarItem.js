import React from 'react'

const MWCarItem = ({ img, title, oldPrice, price }) => {
    return (
        <div className='mwcar-item'>
            <img src={img}></img>
            <div className='mwcar-content'>
                <span >{title}</span>
                <p>{oldPrice}</p>
                <p>{price}</p>
            </div>
        </div>
    )
}

export default MWCarItem