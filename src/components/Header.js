import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Nav from './Nav';

const StyledHeader = styled.header`
  grid-area: header;
  display: flex;
  padding: 2rem 1rem 0.5rem 1rem;
  font-size: var(--t1);
  a {
    text-decoration: none;
  }
  .header-links {
    padding-top: 0.125rem;
    :hover {
      background-color: transparent;
      color: currentColor;
    }
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
    </StyledHeader>
  );
}
