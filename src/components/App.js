import React from 'react';
import GlobalStyle from '../styled/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../styled/theme';
import SearchPanel from './SearchPanel';

import BrregAPI from '../api/api';

const App = () => {
    const api = new BrregAPI();
    api.getRegister(
        'https://data.brreg.no/enhetsregisteret/api/enheter?navn=oslo'
    ).then((resp) => console.log(resp));

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <SearchPanel />
        </ThemeProvider>
    );
};

export default App;
