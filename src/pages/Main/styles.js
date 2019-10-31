import styled from 'styled-components';

export const Container = styled.div`
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  max-width: 1200px;

  @media (max-width: 1024px) {
    margin-left: 30px;
    margin-right: 30px;
  }

  .add {
    background: #fff;
    color: #206a61;
    border: 1px solid #fff;
    padding: 5px 15px;
    border-radius: 10px;
    margin-top: 40px;
    width: calc(25% - 20px);
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    transition: 0.5s;

    &:hover {
      background: transparent;
      color: #fff;
    }
  }
`;

export const Form = styled.form`
  background: #fff;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;

  div {
    display: flex;

    select {
      margin-left: 10px;
    }
  }
`;

export const SubmitButton = styled.button`
  background: #206a61;
  color: #fff;
  border: 1px solid #206a61;
  padding: 5px 15px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;

  &:hover {
    background: #fff;
    color: #206a61;
  }
`;

export const List = styled.div`
  margin-top: 20px;
  width: 100%;
  display: grid;
  /* grid-template-columns: 24% 24% 23% 24%; */
  grid-template-columns: 32% 32% 32%;
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  div {
    margin-top: 20px;
    background: #fff;
    border-radius: 10px;
    padding: 15px;
    text-align: center;

    h1 {
      font-size: 20px;
      margin-bottom: 5px;
      height: 50px;
    }

    p {
      padding: 5px 0;
      & + p {
        border-top: 1px solid #eee;
      }
    }

    button {
      background: crimson;
      color: #fff;
      margin-top: 10px;
      width: 100%;
      border: 1px solid crimson;
      padding-top: 2px;
      padding-bottom: 2px;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s;

      &:hover {
        background: #fff;
        color: crimson;
      }
    }

    a {
      background: #2cbba9;
      text-decoration: none;
      color: #fff;
      margin-top: 10px;
      width: 100%;
      border: 1px solid #2cbba9;
      padding-top: 2px;
      padding-bottom: 2px;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s;

      &:hover {
        background: #fff;
        color: #2cbba9;
      }
    }
  }
`;

export const Load = styled.span`
  text-align: center;
  width: 100%;
  margin-top: 40px;
`;
