import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  background: "#fff",
  color: "#000"
}

export const darkTheme = {
  background: "#000",
  color: "#fff"
}

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Roboto', sans-serif;

    background: #d9d9d9;
  }
  max-width: 400px;
  
  ${props => console.log(props)}
`