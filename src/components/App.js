import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import GlobalStyle from '../styled/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../styled/theme';
import SearchPanel from './SearchPanel';

import BrregAPI from '../api/api';

const App = () => {
    const api = new BrregAPI();
    const query = useSelector((state) => state.query);

    const sendApiRequest = () => {
        api.getRegister(query).then((resp) => console.log('resp', resp));
    };

    useEffect(() => {
        if (query.length > 2) {
            sendApiRequest();
        }
    }, [query]);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <SearchPanel />
        </ThemeProvider>
    );
};

export default App;
