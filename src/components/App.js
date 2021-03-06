import React from 'react';
import GlobalStyle from '../styled/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../styled/theme';
import SearchPanel from './SearchPanel';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <SearchPanel style={{ position: 'relative' }} />
        </ThemeProvider>
    );
};

export default App;
