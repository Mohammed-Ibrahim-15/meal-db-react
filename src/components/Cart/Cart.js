import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { strMeal } = props.cart
    return (
        <div className='cart'>
            <h5>{strMeal}</h5>
        </div>
    );
};

export default Cart;