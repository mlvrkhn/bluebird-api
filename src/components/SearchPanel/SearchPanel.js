import React from 'react';
import StyledSearchPanel from './SearchPanel.styled';
import Header from '../Header';
import Table from '../Table';

const SearchPanel = () => {
    return (
        <StyledSearchPanel>
            <Header />
            <Table />
        </StyledSearchPanel>
    );
};

export default SearchPanel;
