import React, { useContext, useState, useRef } from 'react'
import { Context } from '../../Context'
import styles from './RegisterPage.module.css'
import './RegisterPage.css'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";

const RegisterPage = () => {
    let [name, setName] = useState('');
    let [pw, setPw] = useState('');
    let [showPassword, setShowPassword] = useState(false);
    let [pw2, setPw2] = useState('');
    let [email, setEmail] = useState('');
    let { saveProduct, setUserId } = useContext(Context);
    const history = useHistory();
    const refName = useRef();
    const refEmail = useRef();
    const refPw1 = useRef();
    const refPw2 = useRef();
    const refForm = useRef();
    const refInputTag1 = useRef();
    const refInputTag2 = useRef();
    const refInputTag3 = useRef();
    const refInputTag4 = useRef();
    let equalPw;

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

    const showPasswordFunction = () => {
        setShowPassword(!showPassword);
        console.log(showPassword);
    }

    const createFunction = async (e) => {
        e.preventDefault();
        let formOK = validateForm();
        if (formOK) {
            let originalData;
            if (Object.keys(saveProduct).length !== 0) {
                originalData = { name: name, password: pw, password2: pw2, email: email, saveProduct: saveProduct };
            } else {
                originalData = { name: name, password: pw, password2: pw2, email: email, saveProduct: '' };
            }
            let data = await postData('https://electroshopping-user-regist.herokuapp.com/signup', originalData);
            if (data.message === 'success') {
                setUserId(data.userId);
                if (Object.keys(saveProduct).length > 0) {
                    history.push('/shopcart');
                } else {
                    history.push('/');
                }
            }
        }
    }

    const validateForm = () => {
        let formOK = true;
        if (refName.current.value.length <= 0) {
            refName.current.style.border = 'solid red 2px';
            refInputTag1.current.style.opacity = '1';
            formOK = false;
        } else {
            refName.current.style.border = 'solid 1px black';
            refInputTag1.current.style.opacity = '0';
        }
        if (refEmail.current.value.length <= 0) {
            refInputTag2.current.innerHTML = 'Your e-mail is required';
            refEmail.current.style.border = 'solid red 2px';
            refInputTag2.current.style.opacity = '1';
            formOK = false;
        } else {
            if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(refEmail.current.value))) {
                refEmail.current.style.border = 'solid red 2px';
                refInputTag2.current.style.opacity = '1';
                refInputTag2.current.innerHTML = 'Enter a valid e-mail';
                formOK = false;
            } else {
                refEmail.current.style.border = 'solid 1px black';
                refInputTag2.current.style.opacity = '0';
            }
        }


        if (refPw1.current.value.length <= 0) {
            refPw1.current.style.border = 'solid red 2px';
            refInputTag3.current.style.opacity = '1';
            refInputTag3.current.value = 'A password is required';
            formOK = false;
        } else {
            if (refPw1.current.value !== refPw2.current.value) {
                refInputTag3.current.innerHTML = 'Both passwords must be equal';
                refInputTag3.current.style.opacity = '1';
                refPw1.current.style.border = 'solid red 2px';
                refPw2.current.style.border = 'solid red 2px';
                equalPw = false;
            } else {
                refPw1.current.style.border = 'solid 1px black';
                refInputTag3.current.style.opacity = '0';
                equalPw = true;
            }
        }

        if (refPw2.current.value.length <= 0) {
            refPw2.current.style.border = 'solid red 2px';
            refInputTag4.current.style.opacity = '1';
            formOK = false;
        } else {
            if (equalPw) {
                refPw2.current.style.border = 'solid 1px black';
                refInputTag4.current.style.opacity = '0';
            }
        }
        return formOK;
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
                <form ref={refForm} onsubmit='return validateForm()'>
                    <h1 className={styles.registerPageH1}>Create your account</h1>
                    <h3 className={styles.registerPageH3} ref={refInputTag1}>Name is required</h3>
                    <input ref={refName} className={styles.signupInput} placeholder='Type your name' onChange={(event) => {
                        event.preventDefault();
                        setName(event.target.value);
                    }} value={name} ></input>
                    <h3 className={styles.registerPageH3} ref={refInputTag2}>Your e-mail is required</h3>
                    <input ref={refEmail} className={styles.signupInput} placeholder='E-mail address' value={email} onChange={(event) => {
                        event.preventDefault();
                        setEmail(event.target.value);
                    }}
                        ></input>
                    <h3 className={styles.registerPageH3} ref={refInputTag3}>A password is required</h3>
                    <input ref={refPw1} className={styles.signupInput} placeholder='Create a password' value={pw} onChange={(event) => {
                        event.preventDefault();
                        setPw(event.target.value);
                    }}
                        type={showPassword ? 'text' : 'password'}
                    ></input>
                    <i class="far fa-eye" onClick={showPasswordFunction}></i>
                    <h3 className={styles.registerPageH3} ref={refInputTag4}>Re-type your password</h3>
                    <input ref={refPw2} className={styles.signupInput} placeholder='Re-type your password' value={pw2} onChange={(event) => {
                        event.preventDefault();
                        setPw2(event.target.value);
                    }}
                        type={showPassword ? 'text' : 'password'}
                    ></input>
                    <button className={styles.createBtn} type='submit'
                        onClick={(event) => createFunction(event)}>Create account </button>
                </form>
                <h1 className={styles.registerPageH1}>Already have an account ?</h1>
                <Link to='/login' className={styles.Link}><div className={styles.signinBtn}>Sign in</div></Link>
            </div>
        </div >
    )
}

export default RegisterPage
