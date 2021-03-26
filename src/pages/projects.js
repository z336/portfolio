import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Article from '../styles/Article';

const StyledArticle = styled(Article)`
  ul {
    list-style: none;
    display: grid;
    gap: 1rem;
    @media (min-width: 834px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }
`;

export default function ProjectIndex({ data }) {
  const { edges: posts } = data.allMdx;

  return (
    <Layout>
      <StyledArticle>
        <h1>Projects</h1>
        <ul>
          {posts.map(({ node: post }) => (
            <li key={post.id}>
              <Link to={post.fields.slug}>
                <GatsbyImage
                  image={post.frontmatter.img.childImageSharp.gatsbyImageData}
                  alt="A project screenshot"
                  className="image"
                ></GatsbyImage>
                <h3>{post.frontmatter.title}</h3>
                <p>{post.frontmatter.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </StyledArticle>
    </Layout>
  );
}

export const pageQuery = graphql`
  query projectIndex {
    allMdx(
      filter: { frontmatter: { category: { eq: "projects" } } }
      sort: { fields: frontmatter___order, order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
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
