import React from 'react'
import './SMDepartments.css'

const SMDepartments = (props) => {
    return (
        <div className='smdepartments-wrapper'>
            <h1>Categories</h1>
            <div className='smdepartments'>
                <i class="fas fa-chair"></i>
                <h1>Furniture</h1>
                <i class="fas fa-mobile-alt"></i>
                <h1>Phones</h1>
                <i class="fas fa-blender-phone"></i>
                <h1>Home appliances</h1>
                <i class="fas fa-headphones-alt"></i>
                <h1>Appliances</h1>
                <i class="fas fa-tv"></i>
                <h1>TVs</h1>
                <i class="fas fa-laptop"></i>
                <h1>Computers</h1>
                <i class="fas fa-biking"></i>
                <h1>Sports</h1>
                <i class="fas fa-baby-carriage"></i>
                <h1>Babies</h1>
                <i class="fas fa-gamepad"></i>
                <h1>Games</h1>
                <img src='https://m.casasbahia.com.br/assets/images/icon-beleza.svg'></img>
                <h1>Beauty and Health</h1>
            </div>
            <button>See all categories</button>
        </div>

    )
}

export default SMDepartments