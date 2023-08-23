import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid #ededed;
  border-radius: 10px;

  .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;

    .table-header {
      display: flex;
      align-items: center;
      gap: 10px;
      color: #808080;
    }

    .content {
      color: #808080;

      .Content-title {
        font-size: 24px;

        margin-bottom: 15px;
      }

      .item-table {
        display: flex;
        align-items: center;
        height: 50px;
        justify-content: space-between;
        border-bottom: 1px solid #ededed;
        border-top: 1px solid #ededed;
        margin-top: 10px;

        .input {
          display: flex;
          gap: 10px;

          input {
            color: #fff;
            accent-color: #000;
            width: 20px;
          }
        }
      }
    }
    .more-infos {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      margin-top: 30px;

      .checkbox {
        display: flex;
        gap: 10px;
      }
    }

    .buttons {
      display: flex;
      justify-content: space-around;
      margin-top: 20px;

      button {
        width: 370px;
        height: 50px;
        font-weight: bold;
      }

      .find-button {
        background-color: #ffb612;
      }

      .clean-button {
        background-color: #fff;
        border: 1px solid #808080;
      }
    }
  }
`;
