import React from 'react';
import StyledSearchPanel from './SearchPanel.styled';
import Input from '../Input/Input';

const SearchPanel = () => {
    return (
        <StyledSearchPanel>
            <Input />
            <img
                style={{ height: '60px', marginTop: '60px' }}
                src='../../../src/assets/logo.png'
                alt='tipio-logo'
            />
        </StyledSearchPanel>
    );
};

export default SearchPanel;
