import React from 'react';
import StyledHeader from './Header.styled';
import Input from '../Input';
import Logo from '../Logo';

const Header = () => {
    return (
        <StyledHeader>
            <Input />
            <Logo />
        </StyledHeader>
    );
};

export default Header;
