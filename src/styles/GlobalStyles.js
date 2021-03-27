import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
  --black: #202020;
  --white: #fffffc;
  --red: #ff0000;
}
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  @media screen and (min-width: 320px) {
    html {
      font-size: calc(18px + 2 * ((100vw - 320px) / 680));
    }
  }

  @media screen and (min-width: 1200px) {
    html {
      font-size: 22px;
    }
  }

  body {
    overflow-y: scroll;
    background: var(--white);
    color: var(--black);
  }

  body.dark {
    background: var(--black);
    color: var(--white);
  }

  @media (prefers-color-scheme: dark) {
    background: var(--black);
    color: var(--white);
  }

  nav, footer {
    ul{
      list-style: none;
      padding: 0;
    }
  }

  a,
  a:visited {
    color: inherit;  
  }

  a:hover {
    color: var(--red);
  }

  a:focus, button:focus {
  outline: 3px dashed var(--red);
  z-index: 99;
}
`;

export default GlobalStyles;
