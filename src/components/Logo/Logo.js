import React from 'react';
import logo from '../assets/logo.png';

function Logo() {
    return (
        <img
            style={{
                height: '60px',
                marginLeft: '10px',
            }}
            src={logo}
            alt='tipio-logo'
        />
    );
}

export default Logo;
