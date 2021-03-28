import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import NavLinks from './NavLinks';
import FooterLinks from '../Footer/FooterLinks';
import ToggleTheme from './ToggleTheme';
import useOnClickOutside from '../../utils/useOnClickOutside';

const StyledNavMenu = styled.nav`
  display: flex;
  ul {
    display: flex;
  }
  li {
    padding-right: 3rem;
  }
  a {
    text-decoration: none;
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
      font-size: 2rem;
      :last-child {
        font-family: var(--body-font);
        font-size: 1rem;
        text-transform: none;
        padding-bottom: 3rem;
        margin-top: auto;
      }
    }
    li {
      margin-bottom: 1rem;
    }
    a:hover,
    .active {
      background: var(--white);
      color: var(--black);
      padding: 0 1rem;
      margin: 0 -1rem;
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
`;

export default function NavMenu() {
  const [open, setOpen] = useState(false);

  const ref = useRef();
  useOnClickOutside(ref, () => {
    if (open) setOpen(false);
  });

  return (
    <StyledNavMenu ref={ref}>
      {open ? (
        <NavContainer>
          <NavLinks open={open} setOpen={setOpen} />
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
