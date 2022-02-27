import styled from "styled-components";

import imgHeader from '../../assets/imgs/headline.png'

export const HeaderStyle = styled.header`
  background: url(${imgHeader});
  background-repeat: no-repeat;
  background-size: cover;
  height: 240px;
  

  h1{
    font-size: 40px;
    font-weight: 500;

    text-align: center;
    transform: translateY(100px);
    
    span{
      font-weight: bold;
    }
  }

`;