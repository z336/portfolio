import * as React from 'react';
import 'normalize.css';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import SiteContainer from '../styles/Grids';
import Header from './Navigation/Header';
import Footer from './Footer';

const Main = styled.main`
  grid-area: main;
  padding: 3rem 0;
  border-top: solid var(--black) 6px;
  border-bottom: solid var(--black) 4px;
`;

export default function Layout({ children }) {
  return (
    <SiteContainer>
      <GlobalStyles />
      <Typography />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </SiteContainer>
  );
}
