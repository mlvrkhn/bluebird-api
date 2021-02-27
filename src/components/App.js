import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GlobalStyle from '../styled/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../styled/theme';
import SearchPanel from './SearchPanel';
import {
    fetchRegisterPending,
    fetchRegisterSuccess,
    fetchRegisterFailed,
} from '../actions/actions';
import BrregAPI from '../api/api';

const App = () => {
    const api = new BrregAPI();
    const dispatch = useDispatch();
    const query = useSelector((state) => state.query);

    const sendApiRequest = () => {
        api.getRegister(query).then((resp) => {
            dispatch(fetchRegisterSuccess(resp));
        });
    };

    useEffect(() => {
        if (query.length > 2) {
            sendApiRequest();
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
