import React, { useEffect } from 'react';
import GlobalStyle from '../styled/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../styled/theme';
import SearchPanel from './SearchPanel';

import BrregAPI from '../api/api';

const App = () => {
    const api = new BrregAPI();
    api.getRegister('?navn=martin-gawlyta').then((resp) => console.log(resp));

    useEffect(() => {
        // call API
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <SearchPanel />
        </ThemeProvider>
    );
};

export default App;
