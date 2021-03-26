import { createGlobalStyle } from 'styled-components';

import headerFont from '../assets/fonts/Poppins-Bold.ttf';
import bodyFont from '../assets/fonts/AlteHaasGroteskRegular.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'PoppinsBold';
    src: url(${headerFont});
  }

  @font-face {
    font-family: 'AlteHaasGroteskRegular';
    src: url(${bodyFont});
  }

  body {
    font-family: 'AlteHaasGroteskRegular', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
  }

  h1,
  header {
    font-family: 'PoppinsBold', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
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
`;

export default Typography;
