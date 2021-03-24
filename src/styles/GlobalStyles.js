import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
  --black: #191919;
  --white: #eee;
  --red: #ff0000;
}
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  body {
    font-size: 2rem;
    overflow-y: scroll;
    background: var(--white);
    color: var(--black);
  }

  body.dark {
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
    text-decoration: none;
  }

  a:hover {
    color: var(--red);
  }
`;

export default GlobalStyles;
