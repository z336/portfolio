import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FaLeaf } from 'react-icons/fa';
import NavMenu from './Nav/NavMenu';

const StyledHeader = styled.header`
  grid-area: nav;
  padding-top: 2rem;
  display: flex;
  align-items: center;
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
        <FaLeaf />
      </Link>
      <NavMenu />
    </StyledHeader>
  );
}
