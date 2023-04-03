import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav className='nav'>
            <ActiveLink to="">Home</ActiveLink>
            <ActiveLink to="/posts">post</ActiveLink>
            <ActiveLink to="/about">About Us</ActiveLink>
            <ActiveLink to="/contact">Contact Us</ActiveLink>
            <ActiveLink to="/friends">Friends</ActiveLink>
        </nav>
    );
};

export default Header;