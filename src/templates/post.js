import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { FaArrowCircleLeft } from 'react-icons/fa';
import Article from '../styles/Article';

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

  p,
  ol,
  ul {
    margin: 0 0 2rem;
  }

  .arrows {
    font-size: 2rem;
  }
`;

const shortcodes = { Link };

export default function PostTemplate({ data: { mdx } }) {
  const title = mdx.frontmatter.title;
  const body = mdx.body;
  const back = mdx.frontmatter.category;
  return (
    <Layout>
      <StyledArticle>
        <MDXProvider components={shortcodes}>
          <h1>{title}</h1>
          <MDXRenderer>{body}</MDXRenderer>
          <p className="arrows">
            <Link to={`/${back}`}>
              <FaArrowCircleLeft />
            </Link>
          </p>
        </MDXProvider>
      </StyledArticle>
    </Layout>
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
