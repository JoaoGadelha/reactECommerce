import React from 'react'
import styles from './RegisterPage.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const RegisterPage = () => {
    let [name, setName] = useState('');
    let [pw, setPw] = useState('');
    let [pw2, setPw2] = useState('');
    let [email, setEmail] = useState('');





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
                <input placeholder='First and last names' onChange={(event) => {
                    event.preventDefault();
                    setName(event.target.value);
                }} value={name}></input>
                <input placeholder='E-mail address' value={email} onChange={(event) => {
                    event.preventDefault();
                    setEmail(event.target.value);
                }}></input>
                <input placeholder='Create a password' value={pw} onChange={(event) => {
                    event.preventDefault();
                    setPw(event.target.value);
                }}></input>
                <input placeholder='Re-type your password' value={pw2} onChange={(event) => {
                    event.preventDefault();
                    setPw2(event.target.value);
                }}></input>
                <button onClick={() => {
                    let originalData = { name: name, password: pw, password2: pw2, email: email };
                    postData('https://electroshopping-user-regist.herokuapp.com/register', originalData)
                        .then(data => {
                            console.log(data); // JSON data parsed by `data.json()` call
                        });
                }}>Create account </button>
                <h1>Already have an account ?</h1>
                <Link to='/login' class={styles.Link}><div class={styles.button2}>Sign in</div></Link>
            </div>
        </>
    )
}

export default RegisterPage