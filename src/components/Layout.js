import * as React from 'react';
import 'normalize.css';
import '../styles/GlobalStyles.scss';
import styled from 'styled-components';
import { ThemeProvider } from '../utils/useTheme';
import Header from './Header';
import Footer from './Footer';

const SiteLayout = styled.div`
  min-height: 100vh;
  margin: 0 auto 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    'main'
    'footer';
`;

const Main = styled.main`
  grid-area: main;
  border-top: solid 6px;
  border-bottom: solid 4px;
`;

export default function Layout({ children }) {
  return (
    <ThemeProvider>
      <SiteLayout>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </SiteLayout>
    </ThemeProvider>
  );
}
