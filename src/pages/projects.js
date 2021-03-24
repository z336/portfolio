import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';

export default function ProjectIndex({ data }) {
  const { edges: posts } = data.allMdx;

  return (
    <Layout>
      <section>
        <h2>Projects</h2>
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
                <small>{post.frontmatter.description}</small>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const pageQuery = graphql`
  query projectIndex {
    allMdx(
      filter: { frontmatter: { templateKey: { eq: "projects" } } }
      sort: { fields: frontmatter___order, order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            templateKey
            img {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
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
