import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import { FaArrowCircleLeft } from 'react-icons/fa';
import Article from '../styles/Article';
import Heading from '../styles/Heading';
import Section from '../styles/Section';

const StyledSection = styled(Section)`
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

  .arrows {
    font-size: 2rem;
  }
`;

const shortcodes = { Link };

export default function PostTemplate({ data: { mdx } }) {
  const title = mdx.frontmatter.title;
  const body = mdx.body;
  const category = mdx.frontmatter.category;

  return (
    <>
      <Article>
        <MDXProvider components={shortcodes}>
          <Heading>
            <h1>{title}</h1>
          </Heading>
          <StyledSection>
            <MDXRenderer>{body}</MDXRenderer>
            <p className="arrows">
              <Link to={`/${category}`}>
                <FaArrowCircleLeft />
              </Link>
            </p>
          </StyledSection>
        </MDXProvider>
      </Article>
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
