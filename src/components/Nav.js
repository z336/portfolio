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

  @media screen and (max-width: 1000px) {
    li {
      :first-child {
        display: none;
      }
    }
  }

  @media screen and (max-width: 834px) {
    font-size: 1rem;
    li {
      padding: 0 0.25rem;
      :first-child {
        display: none;
      }
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
