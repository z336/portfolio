import * as React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  grid-area: footer;
  grid-row: 3/4;
  padding-top: 1rem;
  padding-bottom: 3rem;
  font-size: 2.5rem;
  ul {
    display: flex;
  }

  @media screen and (max-width: 834px) {
    ul {
      flex-direction: column;
      li {
        :last-child {
          margin-top: 5rem;
        }
      }
    }
  }

  @media screen and (min-width: 834px) {
    ul {
      li {
        padding-right: 1rem;
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
            href="https://dribbble.com/z336"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dribbble
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
    </StyledFooter>
  );
}
