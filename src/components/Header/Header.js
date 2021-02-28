import React from 'react';
import StyledHeader from './Header.styled';
import Input from '../Input';
import Logo from '../Logo';

import logo from '../../assets/logo.png';
import bird from '../../assets/bird.gif';

const Header = () => {
    return (
        <StyledHeader>
            <Input />
            <Logo src={logo} height='35px' alt='tipio-logo' />
            <Logo src={bird} height='70px' alt='tipio-bird' />
        </StyledHeader>
    );
};

export default Header;
