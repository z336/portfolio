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
    h1,
    header {
      font-family: var(--header-font);
      text-transform: uppercase;
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

    nav,
    footer {
      ul {
        list-style: none;
        padding: 0;
      }
    }

    a {
      transition: all 100ms ease-in-out;
    }

    a:hover {
      color: var(--red);
    }

    a,
    a:visited {
      color: inherit;
    }

    a:focus {
      outline: 6px double var(--red);
    }
  }

  body.dark {
    background: var(--black);
    color: var(--white);
  }

  @media (prefers-color-scheme: dark) {
    background: var(--black);
    color: var(--white);
  }
`;

export default GlobalStyles;
