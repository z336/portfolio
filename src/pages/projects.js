import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import SEO from '../components/SEO';
import Article from '../styles/Article';
import Header from '../styles/Header';

const StyledArticle = styled(Article)`
  .leading-text {
    margin-bottom: 3rem;
  }

  p {
    max-width: 55ch;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
    li {
      border-bottom: 4px solid;
      margin-bottom: 3rem;
      padding-bottom: 3rem;
      :last-child {
        border-bottom: 0;
        margin-bottom: 0;
        padding-bottom: 0;
      }
    }

    @media (min-width: 834px) {
      li {
        display: grid;
        grid-template-columns: 2fr 3fr;
        gap: 3rem;
      }
    }

    small {
      padding-right: 1rem;
      opacity: 0.6;
    }
  }
`;

export default function ProjectIndex({ data }) {
  const { edges: posts } = data.allMdx;

  return (
    <>
      <SEO title="Projects" />
      <Header>
        <h1>Projects</h1>
      </Header>
      <StyledArticle>
        <div className="leading-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            numquam nisi veniam suscipit eligendi illo perspiciatis.
          </p>
        </div>
        <ul>
          {posts.map(({ node: post }) => (
            <li key={post.id}>
              <div className="image">
                <GatsbyImage
                  image={post.frontmatter.img.childImageSharp.gatsbyImageData}
                  alt="A project screenshot"
                ></GatsbyImage>
              </div>
              <div className="text">
                <h2>
                  <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                </h2>
                <p>{post.frontmatter.description}</p>
                {post.frontmatter.tags.map((tag) => {
                  return <small>{tag}</small>;
                })}
              </div>
            </li>
          ))}
        </ul>
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
            category
            tags
            img {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
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
