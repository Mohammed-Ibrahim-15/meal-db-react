import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <h1>React Meal DB</h1>
            <div>
                <a href="/home">Home</a>
                <a href="/menu">Menu</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;