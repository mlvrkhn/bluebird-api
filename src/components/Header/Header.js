import React from 'react';
import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';
import StyledHeader from './Header.styled';
import Input from '../Input';
import Logo from '../Logo';

import logo from '../../assets/brregLogoHvit.svg';
import bird from '../../assets/bird.gif';

const Header = () => {
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
                {/* <Logo src={bird} height='70px' alt='tipio-bird' /> */}
            </StyledHeader>
        </>
    );
};

Header.propTypes = {
    error: PropTypes.string,
};

export default Header;
