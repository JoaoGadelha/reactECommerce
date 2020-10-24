import React, { useContext, useState } from 'react'
import { Context } from '../../Context'
import styles from './RegisterPage.module.css'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";

const RegisterPage = () => {
    let [name, setName] = useState('');
    let [pw, setPw] = useState('');
    let [pw2, setPw2] = useState('');
    let [email, setEmail] = useState('');
    let { saveProduct, setUserId } = useContext(Context);
    const history = useHistory();

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
                    <div className={styles.logo}>
                        <span>ELECTRO</span><span>SHOPPING</span>
                    </div>
                    <a href='' className={styles.firstLink}><i className="far fa-comments"></i>
                        <span>Call Center</span></a>
                    <a href='' className={styles.secondLink}><i className="fas fa-box"></i>
                        <span>My orders</span></a>
                    <a href='' className={styles.thirdLink}><i className="fas fa-dollar-sign"></i>
                        <span>Our latest offers</span></a>
                </div>
            </div>
            <div className={styles.pseudoForm}>
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
                <button className={styles.createBtn} onClick={async () => {
                    let originalData = { name: name, password: pw, password2: pw2, email: email, saveProduct: saveProduct };
                    let data = await postData('https://electroshopping-user-regist.herokuapp.com/signup', originalData);
                    console.log(saveProduct);
                    if (data.message === 'success') {
                        setUserId(data.userId);
                        if (Object.keys(saveProduct).length > 0) {
                            history.push('/shopcart');
                        } else {
                            history.push('/');
                        }
                    }
                }}>Create account </button>
                <h1>Already have an account ?</h1>
                <Link to='/login' className={styles.Link}><div className={styles.signinBtn}>Sign in</div></Link>
            </div>
        </div>
    )
}

export default RegisterPage
