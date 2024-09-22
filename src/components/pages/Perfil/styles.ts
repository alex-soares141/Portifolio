import styled from "styled-components";

export const StyledSection = styled.div`
display: block;
padding-top: 100px;
margin-left: 50px;
color: white;

img{
  width: 218px;
  height: 220px;
  border-radius: 50%;
  padding-top: 16px;
}
@keyframes slideIn {
    from {
      transform: translateX(100vw); /* Começa fora da tela à direita */
      opacity: 0;
    }
    to {
      transform: translateX(0); /* Finaliza na posição original */
      opacity: 1;
    }
  }
  animation: slideIn 3s ease-out forwards;
`
