import React, { useContext, useEffect } from 'react'
import styles from './LoginPage.module.css'
import { Link, Redirect } from 'react-router-dom'
import { useState } from 'react'
import { Context } from '../../Context'

const LoginPage = () => {

    let [email, setEmail] = useState('fnel@yahoo.com');
    let [pw, setPw] = useState('12345');
    let { userId, setUserId } = useContext(Context);


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
        <div class={styles.container}>
            <div class={styles.header}>
                <div class={styles.headerRow1}></div>
                <div class={styles.headerRow2}></div>
                <div class={styles.headerRow3}>
                    <div class={styles.logo}>
                        <span>ELECTRO</span><span>SHOPPING</span>
                    </div>
                    <a href='' class={styles.firstLink}><i class="far fa-comments"></i>
                        <span>Call Center</span></a>
                    <a href='' class={styles.secondLink}><i class="fas fa-box"></i>
                        <span>My orders</span></a>
                    <a href='' class={styles.thirdLink}><i class="fas fa-dollar-sign"></i>
                        <span>Our latest offers</span></a>
                </div>
            </div>
            <div class={styles.pseudoForm}>
                <h1>Sign in to your account</h1>
                <input placeholder='E-mail address' onChange={(event) => {
                    event.preventDefault();
                    setEmail(event.target.value);
                }} value='fnel@yahoo.com'></input>
                <input placeholder='Password' value='12345' onChange={(event) => {
                    event.preventDefault();
                    setPw(event.target.value);
                }}></input>
                <button class={styles.signinBtn} onClick={() => {
                    let originalData = { email: email, password: pw };
                    postData('https://electroshopping-user-regist.herokuapp.com/login', originalData)
                        .then(data => {
                            setUserId(data.id); // JSON data parsed by `data.json()` call
                        });


                }}> Sign in </button>
                <h1>{userId}</h1>
                {userId !== '' ? <Redirect to="/" /> : ''}
                <h1>Don't have an account ?</h1>
                <Link class={styles.Link} to='/signup'><div class={styles.createBtn}>Create account</div></Link>
            </div>
        </div>
    )
}

export default LoginPage
