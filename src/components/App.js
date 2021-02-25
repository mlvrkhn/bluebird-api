import React from 'react';
import GlobalStyle from '../styled/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../styled/theme';
import SearchPanel from './SearchPanel.styled.js';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <SearchPanel />
        </ThemeProvider>
    );
};

export default App;
