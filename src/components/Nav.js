import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import ToggleTheme from './ToggleTheme';

const StyledNav = styled.nav`
  margin-left: auto;

  ul {
    display: flex;
  }

  a {
    text-decoration: none;
  }

  a:hover,
  .active {
    padding: 0 0.5rem;
    margin: 0 -0.5rem;
  }

  @media screen and (max-width: 1200px) {
    position: fixed;
    overflow: hidden;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--black);
    color: var(--white);
    border-top: 0.01rem solid;
    padding: 0.75rem 0.25rem;
    z-index: 1000;
    ul {
      justify-content: space-around;
    }
    a:hover,
    .active {
      background-color: var(--white);
      color: var(--black);
    }
  }

  @media screen and (max-width: 834px) {
    font-size: var(--t2);
    li {
      padding: 0 0.25rem;
      :first-child {
        display: none;
      }
    }
    a:hover,
    .active {
      padding: 0 0.125rem;
      margin: 0 -0.125rem;
    }
  }

  @media screen and (min-width: 1200px) {
    li {
      padding: 0 1.5rem;
    }
  }
`;

export default function Nav() {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" activeClassName="active">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" activeClassName="active">
            Projects
          </Link>
        </li>
        <li>
          <ToggleTheme />
        </li>
      </ul>
    </StyledNav>
  );
}
