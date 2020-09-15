import React from 'react'
import './SubsNewsLetter.css'


const SubsNewsLetter = () => {

   return (
      <div className='snl-wrapper'>
         <div className='snl-container'>
            <span>Subscribe to receive more offers!</span>
            <input placeholder='Type your e-mail'></input>
            <input placeholder='Type your name'></input>
            <button>Subscribe</button>
         </div>
      </div>
   )

}

export default SubsNewsLetter