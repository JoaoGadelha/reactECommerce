import React from 'react'
import './Footer.css'

const Footer = () => {

    return (
        <div className='footer-mobile'>
            <div className='container'>
                <h5>
                    Telesales
                </h5>
                <span>Capitals and metropolitan regions</span>
                <button>
                    Call 2003-4773
                </button>
                <h5>
                    Other regions:<span> (266) 855-0710</span>
                </h5>
                <div className='footerLink'>
                    <img src={'https://m.casasbahia.com.br/assets/images/ic-new-seta-direita.svg'}></img> <h5>Customer service</h5>
                </div>
                <div className='footerLink'>
                    <img src={'https://m.casasbahia.com.br/assets/images/ic-new-seta-direita.svg'}></img><h5>Most search brands and products</h5>
                </div>
            </div>
        </div>
    )

}

export default Footer