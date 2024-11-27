import { css } from '@emotion/react'
const GlobalStyle = () => css`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  form,
  label,
  table,
  button {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  html {
    width: 100%;
    height: 100%;
  }

  #root {
    width: 100%;
    height: 100%;

    padding-left: 350px;
  }

  ol,
  ul {
    list-style: none;
  }
  body {
    &.no-scroll {
      overflow: hidden;
    }
  }

  button {
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 8px;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #45a049;
  }

  input,
  textarea {
    border: none;
    outline: none;
    background-color: transparent;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`

export default GlobalStyle
