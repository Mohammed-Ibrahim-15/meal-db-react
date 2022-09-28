import React from 'react';
import './Item.css'

const Item = (props) => {
    const { strMealThumb, strMeal, strArea, strCategory } = props.item
    console.log(props.item)
    return (
        <div className='item'>
            <img src={strMealThumb} alt="" />
            <div className='item-info'>
                <h3>Name: {strMeal} </h3>
                <p>Origin: {strArea} </p>
                <p>Category: {strCategory} </p>
            </div>
            <button className='btn-cart'>
                <p>Add to Cart</p>
            </button>

        </div>
    );
};

export default Item;