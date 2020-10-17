import React from 'react'
import './SMTop.css'


const SMTop = (props) => {

    let refVar = props.refVar;

    return (
        <div className='smtop'>
            <i onClick={()=>{refVar.current.style.left='-100%';}} className="fas fa-times"></i>
            <h1>Hello, visitor.</h1>
            <h1>Register</h1>
            <h1>My orders</h1>
            <h1>My account</h1>
        </div>
    )
}

export default SMTop