import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Menu.css'

const Menu = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
            .then(res => res.json())
            .then(data => setItems(data.meals))
    }, [])
    return (
        <div className='menu-container'>
            <div className="item-container">
                {
                    items.map(item => <Item item={item} key={item.idMeal}></Item>)
                }

            </div>
            <div className="cart-container">
                <h1>From Cart</h1>
            </div>
        </div>
    );
};

export default Menu;