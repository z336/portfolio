import * as React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/SEO';
import Article from '../styles/Article';
import Header from '../styles/Header';

const StyledArticle = styled(Article)`
  ul {
    max-width: 55ch;
    list-style: none;
    margin: 0 auto;
  }
  li {
    margin-bottom: 3rem;
    :last-child {
      margin-bottom: 0;
      hr {
        display: none;
      }
    }
  }
  a {
    text-decoration: none;
  }
`;

export default function BlogIndex({ data }) {
  const { edges: posts } = data.allMdx;

  return (
    <>
      <SEO title="Words" />
      <Header>
        <h1>Words</h1>
      </Header>
      <StyledArticle>
        <ul>
          {posts.map(({ node: post }) => (
            <li key={post.id}>
              <Link to={post.fields.slug}>
                <h2>{post.frontmatter.title}</h2>
              </Link>
              <p>{post.excerpt}</p>
              <hr />
            </li>
          ))}
        </ul>
      </StyledArticle>
    </>
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
