import styled from "styled-components";
const lightTheme = {
  background: "#fff",
  color: "#000"
}

const darkTheme = {
  background: "#111d34",
  color: "#fff"
}

export const ButtonStyle = styled.button`
  background: ${props => {
    if(props.className === 'lightTheme'){
      return lightTheme.background
    } else {
      return darkTheme.background
    }
  }};


  border: 0;
  font-size: 30px;

  
  width: 100px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  right: 0;

  

  
`