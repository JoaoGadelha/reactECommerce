import React, { useState, useContext, useEffect } from "react";
import styles from "./HeaderRow2.module.css";
import { Context } from "../../../../Context";
import { Link, useHistory } from "react-router-dom";

const HeaderRow2 = () => {
  let { setSearchResult } = useContext(Context);
  let [inputState, setInputState] = useState("");
  const history = useHistory();

  const onChange = (e) => {
    e.preventDefault();
    setInputState(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api-do-joao.herokuapp.com/find/type/${inputState}`)
      .then((resp) => resp.json())
      .then((resp) => {
        setSearchResult(resp);
      });
    history.push("/search");
  };

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logoContainer}>
        <div>
          <span>ELECTRO</span>
          <span>SHOPPING</span>
        </div>
      </Link>

      <form onSubmit={onSubmit}>
        <input
          placeholder="What are you looking for ?"
          value={inputState}
          onChange={onChange}
        ></input>
        <i className="fas fa-search" onClick={onSubmit}></i>
      </form>
      <Link to="/signup" className={styles.loginLink}>
        <i className="fas fa-user"></i>
        <div className={styles.login}>
          <strong>
            <span>Log In or Sign up</span>
          </strong>
          <span>To see your products</span>
        </div>
      </Link>
      <Link to="/shopcart" className={styles.Link}>
        <i className="fas fa-shopping-cart"></i>
      </Link>
    </div>
  );
};

export default HeaderRow2;
