import { createGlobalStyle } from 'styled-components';
import ResetStyle from './ResetStyle';
import PoppinsRegular from '../fonts/Poppins-Regular.woff';
import PoppinsMedium from '../fonts/Poppins-Medium.woff';
import PoppinsBold from '../fonts/Poppins-Bold.woff';

const GlobalStyle = createGlobalStyle`
    ${ResetStyle}
    @font-face {
        font-family: 'Poppins';
        src: url(${PoppinsRegular}) format('woff'), url(${PoppinsMedium}) format('woff'), url(${PoppinsBold}) format('woff');
    }
    html {
        background-color: ${({ theme }) => theme.color.blue};
        color: ${({ theme }) => theme.color.white};
        font-family: 'Poppins, Helvetica'
    }
    a {
        color: ${({ theme }) => theme.color.white};
        text-decoration: none;
    }
`;

export default GlobalStyle;
