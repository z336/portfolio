import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import HelmetTemplate from '../components/SEO';
import Article from '../styles/Article';
import Heading from '../styles/Heading';

const StyledArticle = styled(Article)`
  .cta {
    border: 0.5rem solid;
  }

  .text {
    padding: 1.5rem 2rem;
    h2 {
      margin-bottom: 1rem;
    }
    p {
      max-width: var(--measure);
      margin-bottom: 1.5rem;
    }
    ul {
      display: flex;
      list-style: none;
      margin-bottom: 0;
      @media (max-width: 834px) {
        flex-direction: column;
      }
      li {
        margin-bottom: 0.75rem;
        padding-right: 1.5rem;
        :last-child {
          margin-bottom: 0;
        }
      }
    }
    @media screen and (max-width: 1200px) {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
`;

const StyledHeading = styled(Heading)`
  padding-bottom: 0.25rem;
  padding-left: 2rem;

  @media screen and (max-width: 1200px) {
    padding-left: 1rem;
  }
`;

const StyledLink = styled(Link)`
  font-size: var(--t2);
`;

export default function IndexPage() {
  return (
    <>
      <HelmetTemplate title="Home" />
      <StyledArticle>
        <div className="cta">
          <StyledHeading>
            <h1>Jon Coleman</h1>
          </StyledHeading>
          <div className="text">
            <h2>Front-End Designer</h2>
            <p>
              Designer & developer who is passionate about UX/UI design,
              front-end development, accessibility, and diversity.
            </p>
            <ul>
              <li>
                <StyledLink to="/about">About</StyledLink>
              </li>
              <li>
                <StyledLink to="/projects">Projects</StyledLink>
              </li>
            </ul>
          </div>
        </div>
      </StyledArticle>
    </>
  );
}
