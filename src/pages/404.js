import * as React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/SEO';
import Article from '../styles/Article';
import Header from '../styles/Header';

export default function NotFoundPage() {
  return (
    <>
      <SEO title="404" />
      <Header>
        <h1>Oh no...</h1>
      </Header>
      <Article>
        <p>
          That page just ain't here. Head <Link to="/">home</Link>?
        </p>
      </Article>
    </>
  );
}
