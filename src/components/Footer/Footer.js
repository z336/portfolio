import * as React from 'react';
import styled from 'styled-components';
import FooterLinks from './FooterLinks';

const StyledFooter = styled.footer`
  grid-area: footer;
  grid-row: 3/4;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  padding: 0 1rem;
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
