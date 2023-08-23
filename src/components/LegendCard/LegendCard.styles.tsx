import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 10px;

  .title-card {
    display: flex;
    justify-content: center;
    font-weight: bold;
  }

  .card-content {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .item-card {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    color: #333333;

    img {
      width: 70px;
      height: 70px;
    }
  }
`;
