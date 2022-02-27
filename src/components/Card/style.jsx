import styled from "styled-components";

const lightTheme = {
  background: "#e9e9e9",
  color: "#000"
}

const darkTheme = {
  background: "#111d34",
  color: "#fff"
}


export const CardStyle = styled.div`
   background: ${props => {
    if(props.className === 'lightTheme'){
      return lightTheme.background
    } else {
      return darkTheme.background
    }
  }};

  
  margin: 14px auto 20px auto;
  padding: 14px;
  width: 90%;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 20%;
  }
  .content{
    width: 80%;
    margin: 0 0 0 10px;
    h2 {
      font-size: 22px;
      color: ${props => {
        if(props.className === 'lightTheme'){
          return lightTheme.color
        } else {
          return darkTheme.color
        }
      }};
    }
    p{
      color: ${props => {
        if(props.className === 'lightTheme'){
          return lightTheme.color
        } else {
          return darkTheme.color
        }
      }};
      font-size: 18px;
      margin-top: 7px;
    }
  }

`;