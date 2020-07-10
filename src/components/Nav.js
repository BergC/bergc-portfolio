import React from 'react';
import { connect } from 'react-redux';

const Nav = ({ toggleAbout, toggleProfile }) => (
    <nav className='nav'>
        <ul className='nav__list'>
            <li className='nav__list-item' onClick={() => toggleProfile()}>
                Portfolio
            </li>
            <li className='nav__list-item' onClick={() => toggleAbout()}>
                About
            </li>
            <li className='nav__list-item'>
                <a href='mailto:christophertberg@gmail.com'>Contact</a>
            </li>
        </ul>
    </nav>
);

const mapDispatchToProps = (dispatch) => ({
    toggleAbout: () => dispatch({ type: 'TOGGLE_ABOUT' }),
    toggleProfile: () => dispatch({ type: 'TOGGLE_PORTFOLIO' }),
});

export default connect(undefined, mapDispatchToProps)(Nav);
