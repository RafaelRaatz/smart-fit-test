import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 370px;
  border: 1px solid #808080;
  border-radius: 10px;
  padding: 15px;
  color: #333333;

  .card-adress {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-bottom: 1px solid #808080;

    .opened {
      color: #2fc022;
      font-weight: bold;
    }

    .locked {
      color: #dc0a17;
      font-weight: bold;
    }

    .adress {
      display: flex;
      color: #808080;
      margin-bottom: 10px;
      height: 60px;
    }
  }

  .legend-card {
    display: flex;
    gap: 5px;

    img {
      height: 80px;
      width: 80px;
    }
  }

  .card-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 350px;
    gap: 30px;

    h2 {
      font-size: 30px;
    }
  }
`;
