import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Nav from './Nav';
import ToggleTheme from './ToggleTheme';

const StyledHeader = styled.header`
  grid-area: header;
  display: flex;
  padding: 1rem 1rem 0.5rem 1rem;
  font-size: 1.5rem;
  a {
    text-decoration: none;
  }
  .header-links {
    padding-top: 0.125rem;
  }

  @media screen and (max-width: 1200px) {
    padding: 0.75rem 1rem 0.5rem 1rem;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <Link
        to="/"
        aria-label="Home"
        activeStyle={{ display: 'none' }}
        className="header-links"
      >
        Jon Coleman
      </Link>
      <Nav />
      <ToggleTheme className="header-links" />
    </StyledHeader>
  );
}
