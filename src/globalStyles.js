import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

html, body {
    overflow-x: hidden;
    background-color: #F1F0F0;
}
`;

export default GlobalStyle;
