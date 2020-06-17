import React from 'react';

const Nav = () => (
    <nav className='nav'>
        <ul className='nav__list'>
            <li className='nav__list-item'>
                Portfolio
                <span className='nav__slider'></span>
            </li>
            <li className='nav__list-item'>
                About
                <span className='nav__slider'></span>
            </li>
            <li className='nav__list-item'>
                Contact
                <span className='nav__slider'></span>
            </li>
        </ul>
    </nav>
);

export default Nav;
