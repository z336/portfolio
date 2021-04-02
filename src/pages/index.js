import { Link } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import Article from '../styles/Article';
import Header from '../styles/Header';

const StyledArticle = styled(Article)`
  .cta {
    border: 0.5rem solid;
  }

  .info {
    padding: 1.5rem 0 1rem 2rem;
    h2 {
      margin-bottom: 1rem;
    }
    p {
      max-width: 55ch;
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

const StyledHeader = styled(Header)`
  padding-left: 2rem;
`;

export default function IndexPage() {
  return (
    <>
      <SEO title="Jon Coleman" />
      <StyledArticle>
        <div className="cta">
          <StyledHeader>
            <h1>Jon Coleman</h1>
          </StyledHeader>
          <div className="info">
            <h2>Front-End Designer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus nemo non corrupti doloremque ratione neque? Illum
              beatae itaque aliquam nulla molestiae! Nobis ex quos a perferendis
              sequi quas, sapiente aliquid! I'm testing something out with this
              extra text pay no mind.
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
        </div>
      </StyledArticle>
    </>
  );
}
