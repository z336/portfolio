import { createGlobalStyle } from 'styled-components';

import headerFont from '../assets/fonts/Poppins-Bold.ttf';
import bodyFont from '../assets/fonts/AlteHaasGroteskRegular.ttf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'PoppinsBold';
    src: url(${headerFont});
  }

  @font-face {
    font-family: 'AlteHaasGroteskRegular';
    src: url(${bodyFont});
  }

  :root {
    --black: #202020;
    --white: #fffffc;
    --red: #ff0000;
    --header-font: 'PoppinsBold', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    --body-font: 'AlteHaasGroteskRegular', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
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
    background: var(--white);
    color: var(--black);
    font-family: var(--body-font);
    overflow-y: scroll;

    nav {
      a:hover,
      .active {
        background: var(--black);
        color: var(--white);
        padding: 0 1rem;
        margin: 0 -1rem;
      }

      @media screen and (max-width: 834px) {
        a:hover,
        .active {
          padding: 0 0.125rem;
          margin: 0 -0.125rem;
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
    nav {
      a:hover,
      .active {
        background: var(--white);
        color: var(--black);
        padding: 0 1rem;
        margin: 0 -1rem;
      }
      @media screen and (max-width: 834px) {
        a:hover,
        .active {
          padding: 0 0.125rem;
          margin: 0 -0.125rem;
        }
      }
    }
  }

  h1,
  header {
    font-family: var(--header-font);
    text-transform: uppercase;
  }

  nav,
  footer {
    ul {
      list-style: none;
      padding: 0;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ol,
  ul,
  p {
    margin: 0;
    padding: 0;
  }

  a {
    transition: all 100ms ease-in-out;
  }

  a,
  a:visited {
    color: inherit;
  }

  a:focus, button:focus {
    outline: 6px double var(--red);
  }

  a:focus:not(:focus-visible), button:focus:not(:focus-visible) {
    outline: none;
  }

`;

export default GlobalStyles;
