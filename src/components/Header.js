import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Nav from './Nav';

const StyledHeader = styled.header`
  grid-area: header;
  display: flex;
  /* align-items: flex-end; */
  padding: 2rem 1rem 0.5rem 1rem;
  font-size: 1.5rem;
  a {
    text-decoration: none;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/" aria-label="Home" activeStyle={{ display: 'none' }}>
        Jon Coleman
      </Link>
      <Nav />
    </StyledHeader>
  );
}
