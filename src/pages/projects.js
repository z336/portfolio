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

  ul {
    list-style: none;
    display: flex;
    margin: 0;
    li {
      font-size: 0.8rem;
      letter-spacing: 0.115rem;
      margin-right: 1.5rem;
      :last-child {
        margin-right: 0;
      }
    }
  }

  p {
    max-width: 55ch;
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
          <p>Here are the latest projects I've been able to work on.</p>
        </div>
        {posts.map(({ node: post }) => (
          <div key={post.id} className="post">
            <div>
              <GatsbyImage
                image={post.frontmatter.img.childImageSharp.gatsbyImageData}
                alt={post.frontmatter.alt}
                className="image small-image"
              ></GatsbyImage>
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
                gatsbyImageData(
                  placeholder: BLURRED
                  layout: FULL_WIDTH
                  aspectRatio: 1.5
                )
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
