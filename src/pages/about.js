import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import SEO from '../components/SEO';
import Article from '../styles/Article';
import Header from '../styles/Header';

const StyledArticle = styled(Article)`
  @media (min-width: 834px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .image {
    border: 0.5rem solid currentColor;
  }
`;

export default function About() {
  return (
    <>
      <SEO title="About" />
      <Header>
        <h1>About</h1>
      </Header>
      <StyledArticle>
        <StaticImage
          src="../assets/images/jon.png"
          alt="code"
          className="image"
          placeholder="blurred"
        />
        <div className="text">
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean. A small river named Duden flows by their place and
            supplies it with the necessary regelialia.
          </p>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </StyledArticle>
    </>
  );
}
