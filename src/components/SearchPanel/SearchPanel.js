import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import StyledSearchPanel from './SearchPanel.styled';
import { getDataFromRegister, clearErrors } from '../../modules/brreg/actions';
import Header from '../Header';
import Results from '../Results';

const SearchPanel = () => {
    const dispatch = useDispatch();
    const query = useSelector((state) => state.query);

    useEffect(() => {
        if (query.length > 2) {
            dispatch(getDataFromRegister());
            dispatch(clearErrors());
        }
    }, [query]);

    return (
        <StyledSearchPanel>
            <Header />
            <Results />
            {/* <Preview /> */}
        </StyledSearchPanel>
    );
};

SearchPanel.propTypes = {
    query: PropTypes.string,
};

export default SearchPanel;
