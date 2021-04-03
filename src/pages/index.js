import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/SEO';
import Article from '../styles/Article';
import Header from '../styles/Header';

const StyledArticle = styled(Article)`
  .cta {
    border: 0.5rem solid;
  }

  .text {
    padding: 1.5rem 0 1.5rem 2rem;
    h2 {
      margin-bottom: 1rem;
    }
    p {
      max-width: 55ch;
      font-size: 1.25rem;
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
  }
`;

const StyledHeader = styled(Header)`
  padding-left: 2rem;
`;

const StyledLink = styled(Link)`
  font-size: 1.25rem;
`;

export default function IndexPage() {
  return (
    <>
      <SEO title="Home" />
      <StyledArticle>
        <div className="cta">
          <StyledHeader>
            <h1>Jon Coleman</h1>
          </StyledHeader>
          <div className="text">
            <h2>Front-End Designer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus nemo non corrupti doloremque ratione neque? Illum
              beatae itaque aliquam nulla molestiae!
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
