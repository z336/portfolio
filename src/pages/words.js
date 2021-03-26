import * as React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Article from '../styles/Article';

const StyledArticle = styled(Article)`
  ul {
    max-width: 55ch;
    list-style: none;
    margin: 0 auto;
  }
  li {
    margin-bottom: 3rem;
  }
`;

export default function BlogIndex({ data }) {
  const { edges: posts } = data.allMdx;

  return (
    <Layout>
      <StyledArticle>
        <h1>Words</h1>
        <ul>
          {posts.map(({ node: post }) => (
            <li key={post.id}>
              <Link to={post.fields.slug}>
                <h1>{post.frontmatter.title}</h1>
              </Link>
              <small>{post.excerpt}</small>
            </li>
          ))}
        </ul>
      </StyledArticle>
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
