import React, { useContext, useEffect } from 'react'
import styles from './LoginPage.module.css'
import { Link, Redirect } from 'react-router-dom'
import { useState } from 'react'
import { Context } from '../../Context'

const LoginPage = () => {

    let [email, setEmail] = useState('');
    let [pw, setPw] = useState('');
    let { userId, setUserId, saveProduct } = useContext(Context);


    async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.

            headers: {
                'Content-Type': 'application/json'
                //'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header 
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerRow1}></div>
                <div className={styles.headerRow2}></div>
                <div className={styles.headerRow3}>
                    <Link to="/" className={styles.Link}>
                        <div className={styles.logo}>
                            <span>ELECTRO</span><span>SHOPPING</span>
                        </div>
                    </Link>
                    <a href='' className={styles.firstLink}><i className="far fa-comments"></i>
                        <span>Call Center</span></a>
                    <a href='' className={styles.secondLink}><i className="fas fa-box"></i>
                        <span>My orders</span></a>
                    <a href='' className={styles.thirdLink}><i className="fas fa-dollar-sign"></i>
                        <span>Our latest offers</span></a>
                </div>
            </div>
            <div className={styles.pseudoForm}>
                <h1>Sign in to your account</h1>
                <input placeholder='E-mail address' onChange={(event) => {
                    event.preventDefault();
                    setEmail(event.target.value);
                }} value={email}></input>
                <input placeholder='Password' value={pw} onChange={(event) => {
                    event.preventDefault();
                    setPw(event.target.value);
                }}></input>
                <button className={styles.signinBtn} onClick={async () => {
                    let registerUser = await postData('https://electroshopping-user-regist.herokuapp.com/login', { email: email, password: pw });
                    await setUserId(registerUser.id);
                    let addProdToCart = await postData('https://electroshopping-user-regist.herokuapp.com/setShopCart', { id: saveProduct.id, userId: registerUser.id, quantity: 1 });
                    console.log(addProdToCart)
                }}> Sign in </button>
                <h1>{userId}</h1>
                {userId !== '' ? <Redirect to="/" /> : ''}
                <h1>Don't have an account ?</h1>
                <Link className={styles.Link} to='/signup'><div className={styles.createBtn}>Create account</div></Link>
            </div>
        </div>
    )
}

export default LoginPage
