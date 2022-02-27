import styled from "styled-components";


export const CardStyle = styled.div`
  background-color: #000;
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
      color: #060328;
    }
    p{
      color: #060328;
      font-size: 18px;
      margin-top: 7px;
    }
  }

`;