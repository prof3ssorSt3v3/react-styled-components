import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    min-height: 100vh;
  }
  h1{
    border-left: 1rem solid black;
    margin-left: 1rem;
    padding-left: 1rem;
    font-weight: ${(props) => (props.weight ? props.weight : 900)};
  }
`;
