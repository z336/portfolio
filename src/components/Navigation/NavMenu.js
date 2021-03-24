import React, { useState } from 'react';
import styled from 'styled-components';
import { FaMoon, FaBars } from 'react-icons/fa';
import NavLinks from './NavLinks';

const StyledNavMenu = styled.nav`
  display: flex;
  a {
    margin-right: 2rem;
  }
  .active {
    color: var(--red);
  }
`;

const NavContainer = styled.div`
  display: flex;
  @media (max-width: 834px) {
    flex-direction: column;
    position: fixed;
    width: 65%;
    height: 100%;
    padding: 3rem 0 0 1rem;
    background-color: var(--black);
    color: var(--white);
    transition: all 0.1s ease-in;
    top: 0;
    left: ${(props) => (props.open ? '-100%' : '0')};
    z-index: 99;
  }
`;

const NavToggle = styled.div`
  display: none;
  cursor: pointer;
  @media screen and (max-width: 834px) {
    display: flex;
    margin-left: 2rem;
  }
`;

export default function NavMenu() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <StyledNavMenu>
      {navOpen ? (
        <NavContainer>
          <NavLinks />
        </NavContainer>
      ) : (
        <NavContainer open>
          <NavLinks />
        </NavContainer>
      )}
      <FaMoon />
      <NavToggle navOpen={navOpen} onClick={() => setNavOpen(!navOpen)}>
        <FaBars />
      </NavToggle>
    </StyledNavMenu>
  );
}
