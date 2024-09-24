import styled from "styled-components";

export const StyledSection = styled.div`
text-align:center;
padding-top: 300px;
position: center;
margin-left: 50px;
color: #7FFF00;
font-size: 32px;
padding-bottom: 8px;



span{


  font:bolder;
}



@keyframes slideIn {
    from {
      transform: translateX(100vw);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  animation: slideIn 3s ease-out forwards;

`
