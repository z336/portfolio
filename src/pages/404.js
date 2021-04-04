import * as React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/SEO';
import Article from '../styles/Article';
import Heading from '../styles/Heading';

export default function NotFoundPage() {
  return (
    <>
      <SEO title="404" />
      <Article>
        <Heading>
          <h1>Oh no...</h1>
        </Heading>
        <p>
          That page just ain't here. Head <Link to="/">home</Link>?
        </p>
      </Article>
    </>
  );
}
