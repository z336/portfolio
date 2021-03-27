import * as React from 'react';
import styled from 'styled-components';
import FooterLinks from './FooterLinks';

const StyledFooter = styled.footer`
  grid-area: footer;
  grid-row: 3/4;
  padding: 0.5rem 1rem 2rem 1rem;
  background: var(--black);
  color: var(--white);
  font-size: 1.25rem;
  ul {
    display: flex;
  }

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 834px) {
    display: none;
  }

  @media screen and (min-width: 834px) {
    ul {
      li {
        padding-right: 3rem;
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
      <FooterLinks />
    </StyledFooter>
  );
}
