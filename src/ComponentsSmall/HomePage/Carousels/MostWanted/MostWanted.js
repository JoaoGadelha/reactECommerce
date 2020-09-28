import React from 'react'
import Pointy from './Pointy'
import MWCar from './MWCar'
import './MWCar.css'

const MostWanted = () => {
    return(
        <div className='most-wanted-container-small'>
            <Pointy/>
            <MWCar/>
        </div>
    )
}

export default MostWanted