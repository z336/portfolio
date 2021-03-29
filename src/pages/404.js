import { Link } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import Heading from '../styles/Heading';
import Section from '../styles/Section';

const StyledSection = styled(Section)`
  max-width: 75ch;
`;

export default function FourOhFour() {
  return (
    <>
      <SEO title="404" />
      <Heading>
        <h1>Error</h1>
      </Heading>
      <StyledSection>
        <p>
          Doesn't look like that page exists. Head <Link to="/">Home</Link>?
        </p>
      </StyledSection>
    </>
  );
}
