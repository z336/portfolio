import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import ToggleTheme from './ToggleTheme';

const StyledNav = styled.nav`
  padding-right: 0;
  margin-left: auto;

  ul {
    display: flex;
  }

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 1200px) {
    li {
      :first-child,
      :nth-child(2) {
        display: none;
      }
    }
  }

  @media screen and (max-width: 834px) {
    li {
      padding: 0 0.25rem;
      :last-child {
        padding: 0;
      }
    }
  }

  @media screen and (min-width: 834px) {
    li {
      padding: 0 1.5rem;
      :last-child {
        padding: 0;
      }
      :first-child {
        padding-left: 0;
        margin-right: auto;
      }
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
          <Link to="/words" activeClassName="active">
            Words
          </Link>
        </li>
        <li>
          <ToggleTheme />
        </li>
      </ul>
    </StyledNav>
  );
}
