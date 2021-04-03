import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Nav from './Nav';
import ToggleTheme from './ToggleTheme';

const StyledHeader = styled.header`
  grid-area: header;
  display: flex;
  padding: 2rem 1rem 0.5rem 1rem;
  font-size: 1.5rem;

  a {
    text-decoration: none;
  }

  /* @media screen and (max-width: 834px) {
    font-size: 1.125rem;
  } */
`;

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/" aria-label="Home">
        Jon Coleman
      </Link>
      <Nav />
      <ToggleTheme />
    </StyledHeader>
  );
}
