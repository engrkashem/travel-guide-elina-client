import React from 'react';
import HeaderText from '../HeaderText/HeaderText';
import NavBar from '../NavBar/NavBar';
import './Header.css';

const Header = () => {
    return (
        <div id='header' className='header-container'>
            <NavBar></NavBar>
            <HeaderText></HeaderText>
        </div>
    );
};

export default Header;