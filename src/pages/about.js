import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import HelmetTemplate from '../components/SEO';
import Article from '../styles/Article';
import Heading from '../styles/Heading';

const StyledArticle = styled(Article)`
  ol,
  ul {
    padding-left: 2em;
  }

  a:hover {
    padding: 0;
    margin: 0;
  }

  @media (min-width: 834px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto 1fr;
    grid-template-areas:
      'image text'
      ' . text';
    gap: 2rem;

    .image {
      grid-area: image;
    }
    .text {
      grid-area: text;
    }
  }
`;

export default function About() {
  return (
    <>
      <HelmetTemplate title="About" />
      <Heading>
        <h1>About</h1>
      </Heading>
      <StyledArticle>
        <StaticImage
          src="../assets/images/jon.png"
          alt="Jon's head shot"
          className="large-image image"
          placeholder="blurred"
        />
        <div className="text">
          <p>
            I got my first job in technology {new Date().getFullYear() - 2015}{' '}
            years ago and haven't looked back. I became particularly interested
            in front-end development, which also led to an appreciation and
            focus on design and usability. I feel the web should be accessible
            for all, a joy to use, and enhance our lives wherever possible. When
            I'm not working on dev or design I love to get outside and hike, hit
            the streets on my bike, or occasionally make noise in punk rock
            bands.
          </p>
          <h2>Skills</h2>
          <ul>
            <li>Semantic HTML & Accessibility</li>
            <li>CSS, Sass, & Styled Components</li>
            <li>Javascript, React & Gatsby</li>
            <li>Modern Web Design & a11y</li>
            <li>Photoshop, Adobe XD, & Figma</li>
            <li>JAMstack, GraphQL, Static Site Generators</li>
            <li>Technical Writing</li>
            <li>WordPress, Netflify, & general CMS experience</li>
            <li>Git, NPM, modern tooling</li>
          </ul>
          <h2>Contact</h2>
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
          </ul>
        </div>
      </StyledArticle>
    </>
  );
}
