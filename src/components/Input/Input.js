import React, { useState, useEffect } from 'react';
import StyledInput from './Input.styled';
import { useDispatch } from 'react-redux';

import { setQueryAction } from '../../actions/actions';

const Input = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setQueryAction(query));
    }, [query]);

    return (
        <>
            <StyledInput
                onChange={(e) => {
                    setQuery(e.target.value);
                }}
                value={query}
                placeholder='Søk Brønnøysundregisteret...'
            />
        </>
    );
};

export default Input;
