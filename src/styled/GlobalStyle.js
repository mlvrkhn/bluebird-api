import { createGlobalStyle } from 'styled-components';
import ResetStyle from './ResetStyle';

const GlobalStyle = createGlobalStyle`
    ${ResetStyle}
    html {
        background-color: ${({ theme }) => theme.color.blue};
        color: ${({ theme }) => theme.color.white}
    };
`;

export default GlobalStyle;
