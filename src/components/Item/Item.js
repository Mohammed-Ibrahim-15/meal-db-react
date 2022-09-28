import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons'
import './Item.css'

const Item = (props) => {
    const { addItemToCart, item } = props
    const { strMealThumb, strMeal, strArea, strCategory, idMeal } = item
    // console.log(props.item)

    return (
        <div className='item'>
            <img src={strMealThumb} alt="" />
            <div className='item-info'>
                <h3>Name: {strMeal} </h3>
                <p>Origin: {strArea} </p>
                <p>Category: {strCategory} </p>
            </div>
            <button onClick={() => addItemToCart(item)} className='btn-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faBowlFood}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Item;