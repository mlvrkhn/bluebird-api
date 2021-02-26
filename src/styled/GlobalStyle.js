import { createGlobalStyle } from 'styled-components';
import ResetStyle from './ResetStyle';
import PoppinsRegular from '../fonts/Poppins-Regular.woff';
import PoppinsMedium from '../fonts/Poppins-Medium.woff';

const GlobalStyle = createGlobalStyle`
    ${ResetStyle}
    @font-face {
        font-family: 'Poppins';
        src: url(${PoppinsRegular}) format('woff'), url(${PoppinsMedium}) format('woff');
    }
    html {
        background-color: ${({ theme }) => theme.color.blue};
        color: ${({ theme }) => theme.color.white};
        font-family: 'Poppins'
    };
`;

export default GlobalStyle;
