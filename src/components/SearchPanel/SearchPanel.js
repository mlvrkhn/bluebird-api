import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StyledSearchPanel from './SearchPanel.styled';
import { getDataFromRegister } from '../../modules/brreg/actions';
import Header from '../Header';
import Results from '../Results';

const SearchPanel = () => {
    const dispatch = useDispatch();
    const query = useSelector((state) => state.query);

    useEffect(() => {
        if (query.length > 2) {
            dispatch(getDataFromRegister());
        }
    }, [query]);

    return (
        <StyledSearchPanel>
            <Header />
            <Results />
        </StyledSearchPanel>
    );
};

export default SearchPanel;
