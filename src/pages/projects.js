import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Article from '../styles/Article';
import Heading from '../styles/Heading';
import Section from '../styles/Section';

const StyledSection = styled(Section)`
  ul {
    list-style: none;
    display: grid;
    gap: 2rem;
    p {
      margin-bottom: 1rem;
    }
    @media (min-width: 834px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

const Button = styled.button`
  background-color: inherit;
  color: inherit;
  padding: 0.25rem 1rem;
  border: 3px solid;
  cursor: pointer;
  :hover {
    color: var(--red);
  }
`;

export default function ProjectIndex({ data }) {
  const { edges: posts } = data.allMdx;

  return (
    <Layout>
      <Article>
        <Heading>
          <h1>Projects</h1>
        </Heading>
        <StyledSection>
          <ul>
            {posts.map(({ node: post }) => (
              <li key={post.id}>
                <Link to={post.fields.slug}>
                  <GatsbyImage
                    image={post.frontmatter.img.childImageSharp.gatsbyImageData}
                    alt="A project screenshot"
                    className="image"
                  ></GatsbyImage>
                </Link>
                <h3>{post.frontmatter.title}</h3>
                <p>{post.frontmatter.description}</p>
                <Button>Read More</Button>
              </li>
            ))}
          </ul>
        </StyledSection>
      </Article>
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
                gatsbyImageData(placeholder: BLURRED, aspectRatio: 1.78)
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
