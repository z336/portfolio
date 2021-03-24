import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FaLeaf } from 'react-icons/fa';
import NavMenu from './NavMenu';

const StyledHeader = styled.header`
  grid-area: nav;
  padding-top: 3rem;
  display: flex;
  align-items: center;
  font-size: 4rem;
  nav {
    padding-right: 0;
    margin-left: auto;
    font-size: 3rem;
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
