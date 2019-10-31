import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #1a6a61;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button, select {
    color: #222;
    font-size: 14px;
    font-family: 'Source Code Pro', monospace;
  }

  button {
    cursor: pointer;
  }
`;
