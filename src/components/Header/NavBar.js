import React from 'react';

import './NavBar.css';
import logo from '../../assets/logo.svg';

const navbar = (props) => {
    return (
        <div className="NavBar">
            <p>TUSOTR</p>
            <img src={logo} alt="logo"/>
        </div>
    )
}

export default navbar;