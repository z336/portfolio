import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import HelmetTemplate from '../components/SEO';
import styled from 'styled-components';
import { FaArrowCircleLeft } from 'react-icons/fa';
import Article from '../styles/Article';
import Heading from '../styles/Heading';

const ImageArticle = styled(Article)`
  max-width: 100ch;
  margin: 0 auto;
`;

const StyledArticle = styled(Article)`
  margin: 0 auto;
  max-width: 55ch;
  padding: 0 1rem 3rem 1rem;

  ol,
  ul {
    padding-left: 2em;
  }

  img:first-child {
    max-width: 100ch;
  }

  a:hover {
    padding: 0;
    margin: 0;
  }

  p:last-child {
    margin-bottom: 0;
  }

  .arrows {
    padding-bottom: 3rem;
    font-size: 2rem;
    color: currentColor;
  }
`;

const shortcodes = { Link };

export default function PostTemplate({ data: { mdx } }) {
  const title = mdx.frontmatter.title;
  const image = mdx.frontmatter.img.childImageSharp.gatsbyImageData;
  const alt = mdx.frontmatter.alt;
  const body = mdx.body;
  const category = mdx.frontmatter.category;

  return (
    <>
      <HelmetTemplate title={title} />
      <MDXProvider components={shortcodes}>
        <Heading>
          <h1>{title}</h1>
        </Heading>
        <ImageArticle>
          <GatsbyImage
            image={image}
            alt={alt}
            className="large-image"
          ></GatsbyImage>
        </ImageArticle>
        <StyledArticle>
          <MDXRenderer>{body}</MDXRenderer>
          <p className="arrows">
            <Link to={`/${category}`} className="arrows">
              <FaArrowCircleLeft />
            </Link>
          </p>
        </StyledArticle>
      </MDXProvider>
    </>
  );
}

export const pageQuery = graphql`
  query postQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        description
        img {
          childImageSharp {
            id
            gatsbyImageData
          }
        }
        alt
        category
        tags
      }
    }
  }
`;
