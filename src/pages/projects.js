import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import HelmetTemplate from '../components/SEO';
import Article from '../styles/Article';
import Heading from '../styles/Heading';

const StyledArticle = styled(Article)`
  .post {
    border-bottom: 0.2rem solid;
  }

  .intro {
    margin-bottom: 3rem;
  }

  .image-link {
    :hover {
      background-color: transparent;
      color: currentColor;
    }
  }

  ul {
    list-style: none;
    display: flex;
    margin: 0;
    li {
      font-size: var(--t4);
      letter-spacing: 0.115rem;
      margin-right: 1.5rem;
      margin-bottom: 0;
      :last-child {
        margin-right: 0;
      }
    }
  }

  p {
    max-width: var(--measure);
  }

  a {
    text-decoration: none;
  }

  @media (min-width: 1000px) {
    .post {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 3rem;
      margin-bottom: 4rem;
      padding-bottom: 4rem;
      :last-child {
        margin-bottom: 0;
        padding-bottom: 0;
        border-bottom: 0;
      }
    }

    .text {
      display: flex;
      flex-direction: column;
      ul {
        margin-top: 3rem;
      }
    }
  }

  @media (max-width: 1000px) {
    .post {
      margin-bottom: 3rem;
      padding-bottom: 2rem;
      :last-child {
        margin-bottom: 2rem;
        border-bottom: 0;
      }
    }
  }
`;

export default function ProjectIndex({ data }) {
  const { edges: posts } = data.allMdx;

  return (
    <>
      <HelmetTemplate title="Projects" />
      <Heading>
        <h1>Projects</h1>
      </Heading>
      <StyledArticle>
        <div className="intro">
          <p>A few of the projects I've built.</p>
        </div>
        {posts.map(({ node: post }) => (
          <div key={post.id} className="post">
            <div>
              <Link to={post.fields.slug} className="image-link" tabIndex="-1">
                <GatsbyImage
                  image={post.frontmatter.img.childImageSharp.gatsbyImageData}
                  alt={post.frontmatter.alt}
                  className="image small-image"
                ></GatsbyImage>
              </Link>
            </div>
            <div className="text">
              <h2>
                <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
              </h2>
              <p>{post.frontmatter.description}</p>
              <ul>
                {post.frontmatter.tags.map((tag) => {
                  return <li>{tag}</li>;
                })}
              </ul>
            </div>
          </div>
        ))}
      </StyledArticle>
    </>
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
            img {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
              }
            }
            alt
            category
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
