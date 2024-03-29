import * as React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  grid-area: footer;
  grid-row: 3/4;
  background: var(--black);
  color: var(--white);
  font-size: var(--t2);

  a {
    text-decoration: none;
  }

  a:hover {
    background: var(--white);
    color: var(--black);
    padding: 0 0.5rem;
    margin: 0 -0.5rem;
  }

  div {
    max-width: 63rem;
    margin: 0 auto;
    padding: 0.5rem 1rem 2rem 1rem;
  }

  @media screen and (max-width: 1200px) {
    display: none;
  }

  @media screen and (min-width: 1200px) {
    ul {
      display: flex;
      li {
        padding-right: 2rem;
        :last-child {
          padding-right: 0;
          margin-left: auto;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        <ul>
          <li>
            <a href="mailto:jcoleman1388@gmail.com?subject=Saw Your Site">
              Email
            </a>
          </li>
          <li>
            <a
              href="https://github.com/z336"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jon-coleman-837186104/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>© {new Date().getFullYear()}</li>
        </ul>
      </div>
    </StyledFooter>
  );
}
