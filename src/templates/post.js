import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout';
import { FaArrowCircleLeft } from 'react-icons/fa';

const shortcodes = { Link };

export default function PostTemplate({ data: { mdx } }) {
  const title = mdx.frontmatter.title;
  const body = mdx.body;
  const back = mdx.frontmatter.templateKey;
  return (
    <Layout>
      <section>
        <MDXProvider components={shortcodes}>
          <h2>{title}</h2>
          <MDXRenderer>{body}</MDXRenderer>
          <p>
            <Link to={`/${back}`}>
              <FaArrowCircleLeft />
            </Link>
          </p>
        </MDXProvider>
      </section>
    </Layout>
  );
}

export const pageQuery = graphql`
  query postQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
        templateKey
        tags
      }
    }
  }
`;
