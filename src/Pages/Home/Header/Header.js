import React from 'react';
import HeaderText from '../../Home/HeaderText/HeaderText';
import './Header.css';

const Header = () => {
    //in header.css file all header design that is vanilla css are written.
    //header mainly a banner and some text with search box that is in HeaderText.js
    return (
        <div id='header' className='header-container'>
            <HeaderText></HeaderText>
        </div>
    );
};

export default Header;