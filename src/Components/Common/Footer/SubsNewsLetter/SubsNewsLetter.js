import React from 'react'
import styles from './SubsNewsLetter.module.css'


const SubsNewsLetter = () => {

   return (
      <div className={styles.wrapper}>
         <div className={styles.container}>
            <span>Subscribe to receive more offers!</span>
            <input placeholder='Type your e-mail'></input>
            <input placeholder='Type your name'></input>
            <button>Subscribe</button>
         </div>
      </div>
   )

}

export default SubsNewsLetter