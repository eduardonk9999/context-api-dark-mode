import { createGlobalStyle } from "styled-components";

const lightTheme = {
  background: "#fff",
  color: "#070616"
}

const darkTheme = {
  background: "#070616",
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

    background: ${props => {
      if(props.className === 'lightTheme'){
        return lightTheme.background
      } else {
        return darkTheme.background
      }
    }};
  }
  max-width: 400px;
  
  ${props => console.log(props)}
`