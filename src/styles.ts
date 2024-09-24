import fundo from "./assets/Fundo.jpg";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }


  body::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${fundo});
    background-size: cover;
    background-position: relative; /* Use 'center' ao invés de 'relative' */
    background-repeat: no-repeat;
    opacity: 80%;
    z-index: -1; /* Mantém a imagem atrás do conteúdo */
}


`
export const Button = styled.button`
background-color: green;
padding: 15px;
font-size: 15px;
color: white;
border-radius: 10px;
border: 1px solid white;
cursor: pointer;

`


export default GlobalStyle;
