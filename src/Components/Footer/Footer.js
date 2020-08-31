import React from 'react'
import SubsNewsLetter from './SubsNewsLetter/SubsNewsLetter'
import FooterContact from './FooterContact/FooterContact'
import FooterAbout from './FooterAbout/FooterAbout'
import FooterLastRow1 from './FooterLastRow1/FooterLastRow1'
import FooterLastRow2 from './FooterLastRow2/FooterLastRow2'
import FooterLastRow3 from './FooterLastRow3/FooterLastRow3'


const Footer = () => {

    return (
        <div className='footer-container'>
            <SubsNewsLetter />
            <FooterContact />
            <FooterAbout />
            <FooterLastRow1 />
            <FooterLastRow2 />
            <FooterLastRow3 />
        </div>
    )

}

export default Footer