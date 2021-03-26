import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import NavLinks from './NavLinks';
import FooterLinks from '../Footer/FooterLinks';
import ToggleTheme from './ToggleTheme';

const StyledNavMenu = styled.nav`
  display: flex;
  .active {
    color: var(--red);
  }
  ul {
    display: flex;
  }
  li {
    margin-right: 3rem;
  }
`;

const NavContainer = styled.div`
  display: flex;
  @media (max-width: 834px) {
    flex-direction: column;
    position: fixed;
    width: 75%;
    height: 100%;
    padding: 3rem 3rem 0 2rem;
    background-color: var(--black);
    color: var(--white);
    transition: all 0.1s ease-in;
    top: 0;
    left: ${(props) => (props.open ? '-100%' : '0')};
    z-index: 99;
    ul {
      flex-direction: column;
      :last-child {
        font-size: 1rem;
        padding-bottom: 3rem;
        margin-top: auto;
      }
    }
    li {
      margin-bottom: 1rem;
    }
  }
`;

const NavToggle = styled.button`
  color: inherit;
  background-color: transparent;
  border: none;
  display: none;
  cursor: pointer;
  @media screen and (max-width: 834px) {
    display: flex;
    margin-left: 2rem;
  }
  :hover {
    color: var(--red);
  }
`;

export default function NavMenu() {
  const [open, setOpen] = useState(false);
  return (
    <StyledNavMenu>
      {open ? (
        <NavContainer>
          <NavLinks />
          <FooterLinks />
        </NavContainer>
      ) : (
        <NavContainer open>
          <NavLinks />
        </NavContainer>
      )}
      <ToggleTheme />
      <NavToggle navOpen={open} onClick={() => setOpen(!open)}>
        <FaBars />
      </NavToggle>
    </StyledNavMenu>
  );
}
