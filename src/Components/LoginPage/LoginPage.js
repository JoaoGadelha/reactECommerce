import React from 'react'
import styles from './LoginPage.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const LoginPage = () => {

    let [email, setEmail] = useState('');
    let [pw, setPw] = useState('');

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
        <>
            <div class={styles.header}></div>
            <div class={styles.pseudoForm}>
                <input placeholder='E-mail address' onChange={(event) => {
                    event.preventDefault();
                    setEmail(event.target.value);
                }} value={email}></input>
                <input placeholder='Password' value={pw} onChange={(event) => {
                    event.preventDefault();
                    setPw(event.target.value);
                }}></input>
                <button onClick={() => {
                    let originalData = { email: email, password: pw };
                    postData('https://electroshopping-user-regist.herokuapp.com/login', originalData)
                        .then(data => {
                            console.log(data); // JSON data parsed by `data.json()` call
                        });
                }}> Sign in </button>
                <h1>Don't have an account ?</h1>
                <Link class={styles.Link} to='/signup'><div class={styles.button2}>Create account</div></Link>
            </div>
        </>
    )
}

export default LoginPage
