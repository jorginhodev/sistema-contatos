import styled from 'styled-components';

export const Container = styled.div`
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  max-width: 700px;
  background: #fff;
  padding: 30px;
  border-radius: 10px;

  @media (max-width: 700px) {
    margin-left: 30px;
    margin-right: 30px;
  }

  h1 {
    font-size: 24px;
    text-align: center;
  }

  .formNewContact {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    input {
      margin-top: 10px;
      margin-bottom: 10px;
      padding: 5px;
      outline: 0;
    }
    span:before {
      content: '* ';
    }
    span {
      color: crimson;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 20px;

  button {
    background: #206a61;
    width: 25%;
    color: #fff;
    border: 1px solid #206a61;
    padding: 5px 15px;
    border-radius: 4px;
    transition: 0.5s;

    &:hover {
      background: #fff;
      color: #206a61;
    }
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background: lightgray;
    color: #fff;
    width: 25%;
    margin-right: 10px;
    border: 1px solid lightgray;
    padding: 5px 15px;
    border-radius: 4px;
    transition: 0.5s;

    &:hover {
      background: #fff;
      color: lightgray;
    }
  }
`;
