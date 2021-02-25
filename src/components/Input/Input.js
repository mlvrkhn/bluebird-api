import React, { useState, useEffect } from 'react';
import StyledInput from './Input.styled';
// import { setQueryAction } from '../../actions/';

const Input = () => {
    const [query, setQuery] = useState('');
    useEffect(() => {
        console.log('effekt used');
        // dispatch(setQueryAction());
        // return () => {
        //     cleanup;
        // };
    }, [query]);
    return (
        <StyledInput
            onChange={(e) => {
                setQuery(e.target.value);
            }}
            placeholder='Søk Brønnøysundregisteret...'
        />
    );
};

export default Input;
