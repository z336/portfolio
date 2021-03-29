import { Link } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import Article from '../styles/Article';
import Heading from '../styles/Heading';
import Section from '../styles/Section';

const StyledSection = styled(Section)`
  max-width: 75ch;
  div {
    padding: 2rem;
    border: 0.5rem solid;
    h2 {
      font-family: var(--header-font);
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 1rem;
    }
    ul {
      display: flex;
      list-style: none;
      @media (max-width: 834px) {
        flex-direction: column;
      }
      li {
        padding-right: 1rem;
      }
    }
  }
`;

export default function IndexPage() {
  return (
    <>
      <SEO title="Jon Coleman" />
      <Article>
        <Heading>
          <h1>Jon Coleman</h1>
        </Heading>
        <StyledSection>
          <div>
            <h2>Front-End Designer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus nemo non corrupti doloremque ratione neque? Illum
              beatae itaque aliquam nulla molestiae! Nobis ex quos a perferendis
              sequi quas, sapiente aliquid!
            </p>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
            </ul>
          </div>
        </StyledSection>
      </Article>
    </>
  );
}
