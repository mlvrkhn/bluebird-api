import React from 'react';
import GlobalStyle from '../styled/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../styled/theme';
import SearchPanel from './SearchPanel';

import BrregAPI from '../api/api';

const App = () => {
    const api = new BrregAPI();
    api.getRepos('920647960');
    // try {
    //     const odpowiedz = await api.getRepos('920647960');
    //     const res = await odpowiedz;
    //     console.log(res);
    // } catch (error) {

    // }

    // componentDidMount = () => {
    //     console.log('mounted');
    // };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <SearchPanel />
        </ThemeProvider>
    );
};

export default App;
