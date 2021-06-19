import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';

const Header = () => (
    <div className='header'>
        <div className='options'>
            <Link className='option' to='/'>HOME</Link>
            <Link className='option' to='/shop'>BOOK</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
        </div>
    </div>
)

export default Header;