import * as React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Article from '../styles/Article';
import Heading from '../styles/Heading';
import Section from '../styles/Section';

const StyledSection = styled(Section)`
  ul {
    max-width: 55ch;
    list-style: none;
    margin: 0 auto;
  }
  li {
    margin-bottom: 3rem;
    :last-child {
      margin-bottom: 0;
    }
  }
  a {
    text-decoration: none;
  }
`;

export default function BlogIndex({ data }) {
  const { edges: posts } = data.allMdx;

  return (
    <Layout>
      <Article>
        <Heading>
          <h1>Words</h1>
        </Heading>
        <StyledSection>
          <ul>
            {posts.map(({ node: post }) => (
              <li key={post.id}>
                <Link to={post.fields.slug}>
                  <h2>{post.frontmatter.title}</h2>
                  <small>{post.excerpt}</small>
                </Link>
              </li>
            ))}
          </ul>
        </StyledSection>
      </Article>
    </Layout>
  );
}

export const pageQuery = graphql`
  query blogIndex {
    allMdx(
      filter: { frontmatter: { category: { eq: "words" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
            category
            img {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, aspectRatio: 1.33)
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;