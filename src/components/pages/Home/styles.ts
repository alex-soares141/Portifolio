import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
 justify-content: space-between;

  padding: 25px;
  background-color: black;
  color:#90EE90;
a {
    color: #90EE90;
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
