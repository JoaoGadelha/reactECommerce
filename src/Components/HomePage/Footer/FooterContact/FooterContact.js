import React from 'react'
import './FooterContact.css'

const FooterContact = () => {
    return (
        <div className='footer-contact-wrapper'>
            <div className='footer-contact-container'>
                <div className='footer-telemarketing'>
                    <h3> TELESALES - BUY THROUGH YOUR PHONE</h3>
                    <span> 2003-4773</span>
                </div>
                <div className='footer-whatsapp'>
                    <h3> CALL CENTER</h3>
                    <span>2003-4336</span>
                    <span> Speak with us through Whatsapp <div className='whats-icon'></div></span>
                </div>
                <div className='footer-region'>
                    <h3> FOR NY AND REGION</h3>
                    <span>212-200-0783</span>
                </div>
                <div className='footer-physical-store'>
                    <h3> CALL CENTER - PHYSICAL STORES</h3>
                    <span>212-202-8643</span>
                </div>
            </div>
        </div>
    )
}

export default FooterContact