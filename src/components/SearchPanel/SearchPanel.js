import React from 'react';
import StyledSearchPanel from './SearchPanel.styled';
import Header from '../Header';
import Results from '../Results';

const SearchPanel = () => {
    return (
        <StyledSearchPanel>
            <Header />
            <Results />
        </StyledSearchPanel>
    );
};

export default SearchPanel;
