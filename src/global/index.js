import {createGlobalStyle}  from 'styled-components';

export const Globals = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, :root, #root {
    font-family: 'Cabin', sans-serif;
    width: 100%;
    height: 100%;
  }
`;