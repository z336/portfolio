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
    button:hover {
      background: var(--black);
      color: var(--white);
    }
    nav {
      a:hover,
      .active {
        background: var(--black);
        color: var(--white);
        padding: 0 1rem;
        margin: 0 -1rem;
        a:focus {
          outline: 6px double var(--white);
          z-index: 999;
        }
      }
    }
    footer {
      a:hover {
        background: var(--white);
        color: var(--black);
        padding: 0 0.5rem;
        margin: 0 -0.5rem;
      }
    }
  }

  body.dark {
    background: var(--black);
    color: var(--white);
    button:hover {
      background: var(--white);
      color: var(--black);
    }
    nav {
      a:hover,
      .active {
        background: var(--white);
        color: var(--black);
        padding: 0 1rem;
        margin: 0 -1rem;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    background: var(--black);
    color: var(--white);
    button:hover {
      background: var(--white);
      color: var(--black);
    }
    nav {
      a:hover,
      .active {
        background: var(--white);
        color: var(--black);
        padding: 0 1rem;
        margin: 0 -1rem;
      }
    }
  }

  nav,
  footer {
    ul {
      list-style: none;
      padding: 0;
    }
  }

  a,
  a:visited {
    color: inherit;
  }

  a:focus,
  button:focus {
    outline: 6px double currentColor;
    z-index: 999;
  }
`;

export default GlobalStyles;
