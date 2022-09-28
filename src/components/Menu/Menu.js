import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Item from '../Item/Item';
import './Menu.css'

const Menu = () => {
    const [items, setItems] = useState([])
    const [carts, setCart] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
            .then(res => res.json())
            .then(data => setItems(data.meals))
    }, [])

    useEffect(() => {

    }, [])

    const addItemToCart = (item) => {
        // console.log('added', item)
        const newCart = [...carts, item]
        setCart(newCart)
        console.log(newCart)
    }
    return (
        <div className='menu-container'>
            <div className="item-container">
                {
                    items.map(item =>
                        <Item item={item}
                            key={item.idMeal}
                            addItemToCart={addItemToCart}
                        ></Item>)
                }

            </div>
            <div className="cart-container">
                <h2>Ordered Food</h2>
                {
                    carts.map(cart =>
                        <Cart cart={cart}
                            key={cart.idMeal}
                        ></Cart>)
                }
            </div>
        </div>
    );
};

export default Menu;