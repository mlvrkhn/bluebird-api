import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StyledHeader from './Header.styled';
import Input from '../Input';
import Logo from '../Logo';

import logo from '../../assets/logo.png';
import bird from '../../assets/bird.gif';

const Header = () => {
    const dispatch = useDispatch();
    const error = useSelector((state) => state.error);

    return (
        <>
            <p>
                {error
                    ? 'Your request must be 9-digit org. number or companys name'
                    : null}
            </p>
            <StyledHeader>
                <Input />
                <Logo src={logo} height='35px' alt='tipio-logo' />
                <Logo src={bird} height='70px' alt='tipio-bird' />
            </StyledHeader>
        </>
    );
};

export default Header;
