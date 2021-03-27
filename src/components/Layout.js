import * as React from 'react';
import 'normalize.css';
import styled from 'styled-components';
import { ThemeProvider } from '../utils/useTheme';
import SiteContainer from '../styles/Grids';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Header from './Header';
import Footer from './Footer/Footer';

const Main = styled.main`
  grid-area: main;
  border-top: solid 6px;
  border-bottom: solid 4px;
`;

export default function Layout({ children }) {
  return (
    <ThemeProvider>
      <SiteContainer>
        <GlobalStyles />
        <Typography />
        <Header />
        <Main>{children}</Main>
        <Footer />
      </SiteContainer>
    </ThemeProvider>
  );
}
