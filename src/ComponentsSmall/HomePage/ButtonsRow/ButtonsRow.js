import React from 'react'
import './ButtonsRow.css'

const ButtonsRow = () => {
    return (
        <div className='buttons-row-small'>
            <div className='grid'>
                <div className='item1'><i className="fab fa-whatsapp"></i><span>Talk to us on Whastapp</span></div>
                <div className='item2'><i className="fas fa-tv"></i><span>Promotions on TV</span></div>
                <div className='item3'><i className="fas fa-tags"></i><span>Black Friday Promotions</span></div>
                <div className='item4'><i className="fas fa-hashtag"></i><span>Stay well at home</span></div>
            </div>
        </div>
    )
}

export default ButtonsRow