import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  height: 200px;
  background: #363636;
  margin-top: 150px;

  .footer {
    display: flex;
    max-width: 1140px;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    gap: 20px;

    img{
        width: 100px;
    }
  }
`;
