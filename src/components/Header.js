import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FaPeace } from 'react-icons/fa';
import NavMenu from './Nav/NavMenu';

const StyledHeader = styled.header`
  grid-area: nav;
  display: flex;
  align-items: center;
  padding: 2rem 1rem 0 1rem;
  font-size: 1.5rem;
  nav {
    padding-right: 0;
    margin-left: auto;
    font-size: 1.5rem;
    z-index: 99;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <FaPeace />
      </Link>
      <NavMenu />
    </StyledHeader>
  );
}
