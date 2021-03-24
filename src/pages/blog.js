import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';

export default function BlogIndex({ data }) {
  const { edges: posts } = data.allMdx;

  return (
    <Layout>
      <section>
        <h2>Blog</h2>
        <ul>
          {posts.map(({ node: post }) => (
            <li key={post.id}>
              <Link to={post.fields.slug}>
                <h3>{post.frontmatter.title}</h3>
              </Link>
              <small>{post.frontmatter.date}</small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const pageQuery = graphql`
  query blogIndex {
    allMdx(
      filter: { frontmatter: { templateKey: { eq: "blog" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
            templateKey
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
