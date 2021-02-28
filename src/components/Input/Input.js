import React, { useState, useEffect } from 'react';
import StyledInput from './Input.styled';
import { useDispatch } from 'react-redux';

import { setQuery } from '../../modules/brreg/actions';

const Input = () => {
    const [userInput, setUserInput] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setQuery(userInput));
    }, [userInput]);

    return (
        <StyledInput
            onChange={(e) => {
                setUserInput(e.target.value);
            }}
            value={userInput}
            placeholder='Søk Brønnøysundregisteret...'
        />
    );
};

export default Input;
