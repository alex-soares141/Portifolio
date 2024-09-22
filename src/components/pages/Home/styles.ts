import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
 justify-content: space-around;

  padding: 32px;
  background-color: blue;
  color: white;
a {
    color: white;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  span {
    color: red;
  }

`;
