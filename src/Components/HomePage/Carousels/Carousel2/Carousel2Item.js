import React from 'react'

const Carousel2Item = (props) => {
    let flag = props.flag;
    let prodDetail = props.prodDetail;
    let oldPrice = props.oldPrice;
    let price = props.price;
    let install = '';
    let prodImg = props.prodImg;
    let visible = props.visible;

    if (visible) {
        return (
            <div className='carousel2-item visible'>
                <a className='content' href='#'>
                    <img src={prodImg}></img>
                    <div className='flag'>{flag}</div>
                    <div className='product-details'>{prodDetail}</div>
                    <div className='old-price'>{oldPrice}</div>
                    <div className='actual-price'>{price}</div>
                    <div className='installment'>{install}</div>
                </a>
            </div>
        )
    } else {
        return(
        <div className='carousel2-item'>
            <a className='content' href='#'>
                <img src={prodImg}></img>
                <div className='flag'>{flag}</div>
                <div className='product-details'>{prodDetail}</div>
                <div className='old-price'>{oldPrice}</div>
                <div className='actual-price'>{price}</div>
                <div className='installment'>{install}</div>
            </a>
        </div>
        )
    }
}

export default Carousel2Item