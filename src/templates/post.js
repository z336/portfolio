import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import { FaArrowCircleLeft } from 'react-icons/fa';
import Article from '../styles/Article';
import Header from '../styles/Header';

const ImageArticle = styled(Article)`
  max-width: 100ch;
  margin: 0 auto;
  img {
    border: 0.5rem solid currentColor;
  }
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
    font-size: 2rem;
    color: currentColor;
  }
`;

const shortcodes = { Link };

export default function PostTemplate({ data: { mdx } }) {
  const title = mdx.frontmatter.title;
  const body = mdx.body;
  const category = mdx.frontmatter.category;

  return (
    <>
      <MDXProvider components={shortcodes}>
        <Header>
          <h1>{title}</h1>
        </Header>
        <ImageArticle>
          <GatsbyImage
            image={mdx.frontmatter.img.childImageSharp.gatsbyImageData}
            alt="A project screenshot"
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
        category
        tags
        img {
          childImageSharp {
            id
            gatsbyImageData
          }
        }
      }
    }
  }
`;
