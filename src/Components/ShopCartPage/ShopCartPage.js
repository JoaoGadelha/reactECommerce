import React, { useContext, useEffect, useState } from 'react'
import styles from './ShopCartPage.module.css'
import { Context } from '../../Context'
import { emptyObj } from '../Common/CommonFunctions'


const ShopCartPage = () => {

    let { userId } = useContext(Context);
    let originalData = { userId: userId };
    let [shopCartIds, setShopCartIds] = useState([]);
    let [prodList, setProdList] = useState([]);
    let [shopCartItems, setShopCartItems] = useState([]);
    let prodListAux = [];
    let [firstRender1, setFirstRender1] = useState(true);
    let [firstRender2, setFirstRender2] = useState(true);
    let [auxState, setAuxState] = useState('');

    // fetches the id's of all products in the user's shopping cart
    useEffect(() => {
        console.log('A render has occurred');
        postData(`https://electroshopping-user-regist.herokuapp.com/getShopCart/${userId}`, originalData)
            .then(data => {
                setShopCartIds(data.shopCart); // JSON data parsed by `data.json()` call
            });
        let aux = shopCartItems;
        aux.finishedExec = false;
        aux.prodArray = [];
        setShopCartItems(aux);
    }, [])

    // when the Id's of the products are finished being stored in 'shopCartIds', calls 'requestShopCartItems()'
    useEffect(() => {
        if (!firstRender1) {
            if (Array.isArray(shopCartIds) && shopCartIds.length !== 0) {
                requestShopCartItems();
            }
        }
        setFirstRender1(false);
    }, [shopCartIds])

    // when 'requestShopCartItems' has finished executing, call 'updateProdList'

    useEffect(() => {
        console.log(firstRender2, shopCartItems);
        if (!firstRender2) {
            let aux = shopCartItems;
            if (aux !== undefined && aux.finishedExec === true) {
                updateProdList();
            }
        }
        setFirstRender2(false);
    }, [firstRender2, shopCartItems, auxState]);

    // fetches products image and data and stores it in 'shopCartItems'
    const requestShopCartItems = async () => {
        console.log('requestShopCartItems');
        let alreadyExecuted = false;
        for (let i = 0; i < shopCartIds.length; i++) {
            //if (!alreadyExecuted) {
            //alreadyExecuted = true;
            await fetch(`https://api-do-joao.herokuapp.com/find/id/${shopCartIds[i]}`)
                .then(res => res.json())
                .then(res => {
                    let aux = shopCartItems;
                    aux.prodArray.push(res[0]);
                    setShopCartItems(aux);
                }
                );
            if (i + 1 === shopCartIds.length) {
                let aux = shopCartItems;
                aux.finishedExec = true;
                setShopCartItems(aux);
            }
            //}
            //alreadyExecuted = false;
        }
        setAuxState(shopCartItems);
    }

    // Updates the products list, which renders products image and info in the shopping cart
    const updateProdList = () => {
        console.log('updateProdList');
        prodListAux = [];
        console.log(shopCartItems);
        for (let i = 0; i < shopCartItems.prodArray.length; i++) {

            prodListAux.push(

                <>
                    <img src={shopCartItems.prodArray[i].image[0]}></img>
                    <h1>1</h1>
                    <h1>{shopCartItems.prodArray[i].price}</h1>
                    <h1>{shopCartItems.prodArray[i].price}</h1>
                </>
            )
        }
        setProdList(prodListAux);
    }

    // used to send a POST message to the server
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
    if (shopCartItems !== undefined && Object.keys(shopCartItems).length > 1) {
        return (
            <div class={styles.container}>
                <h1>Product</h1><h1>Quantity</h1><h1>Unit price</h1><h1>Total price</h1>
                {prodList}

            </div>
        )
    } else {
        return (
            <div>Empty</div>
        )
    }
}

export default ShopCartPage