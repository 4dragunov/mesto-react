import React from 'react';
import logo from '../images/logo.svg'

const Header = () => {
    return (
        <header className="header">
            <img src={logo} className="header__logo" alt="Логотип"/>
        </header>
    );
};

export default Header;