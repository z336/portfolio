import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import { FaArrowCircleLeft } from 'react-icons/fa';
import Article from '../styles/Article';
import Header from '../styles/Header';

const StyledArticle = styled(Article)`
  max-width: 55ch;
  margin: 0 auto;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 1rem;
  }

  ol,
  ul {
    padding-left: 2em;
  }

  a {
    color: var(--red);
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
        date
        category
        tags
      }
    }
  }
`;
