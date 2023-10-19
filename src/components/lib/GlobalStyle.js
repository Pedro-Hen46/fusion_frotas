import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", "Helvetica Neue", Helvetica, Arial;
    text-decoration: none;
  }
  
  input{
    border-radius: 10px;
    height: 60px;
    height: 2.5rem;
    padding: 1rem;

  }
  
  `;

export default GlobalStyle;