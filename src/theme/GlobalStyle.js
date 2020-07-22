import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&display=swap');
*, *::before, *::after{
 
}
body{
font-family: 'Barlow', sans-serif;
margin: 0
}
h5{
  margin-bottom: 0;
  font-family: 'Barlow', sans-serif
}
`;

export default GlobalStyle;
// box-sizing: border-box;
// -webkit-font-smoothing: antialiased;
// -moz-osx-font-smoothing: grayscale;
