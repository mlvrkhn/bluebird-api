import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GlobalStyle from '../styled/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../styled/theme';
import SearchPanel from './SearchPanel';
import { getDataFromRegister } from '../actions/actions';

const App = () => {
    const dispatch = useDispatch();
    const query = useSelector((state) => state.query);

    useEffect(() => {
        if (query.length > 2) {
            dispatch(getDataFromRegister());
        }
    }, [query]);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <SearchPanel style={{ position: 'relative' }} />
        </ThemeProvider>
    );
};

export default App;
