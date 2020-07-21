import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&display=swap');
*, *::before, *::after{
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

}
body{
font-family: 'Barlow', sans-serif
}`;

export default GlobalStyle;
