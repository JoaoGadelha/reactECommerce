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
            <h1>Create your account</h1>
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
                <button class={styles.createBtn} onClick={() => {
                    let originalData = { name: name, password: pw, password2: pw2, email: email };
                    postData('https://electroshopping-user-regist.herokuapp.com/register', originalData)
                        .then(data => {
                            console.log(data); // JSON data parsed by `data.json()` call
                        });
                }}>Create account </button>
                <h1>Already have an account ?</h1>
                <Link to='/login' class={styles.Link}><div class={styles.signinBtn}>Sign in</div></Link>
            </div>
        </div>
    )
}

export default RegisterPage