import * as React from 'react';
// import styled from 'styled-components';
import Layout from '../components/Layout';
import Article from '../styles/Article';

// const StyledArticle = styled(Article);

export default function IndexPage() {
  return (
    <Layout>
      <Article>
        <h1>Jon Coleman</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </Article>
    </Layout>
  );
}
