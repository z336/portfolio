import * as React from 'react';
import Layout from '../components/Layout';
import Article from '../styles/Article';
import Heading from '../styles/Heading';
import Section from '../styles/Section';

export default function IndexPage() {
  return (
    <Layout>
      <Article>
        <Heading>
          <h1>Jon Coleman</h1>
        </Heading>
        <Section>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </Section>
      </Article>
    </Layout>
  );
}
