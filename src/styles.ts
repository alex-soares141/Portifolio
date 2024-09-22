import fundo from "./assets/Fundo.jpg";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  body {
    background-image: url(${fundo});
    background-size: cover;
    background-position: relative;
     background-repeat: no-repeat;
     width: 100%;
     height: 100%;
  }


`

export default GlobalStyle;
