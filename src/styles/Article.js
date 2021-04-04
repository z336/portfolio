import styled from 'styled-components';

const Article = styled.article`
  max-width: 63rem;
  margin: 0 auto;
  padding: 3rem 1rem;

  p,
  ul,
  ol {
    margin-bottom: 2rem;
  }

  p,
  li {
    line-height: 1.8rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 1rem;
  }

  a:hover {
    padding: 0 0.5rem 0.25rem 0.5rem;
    margin: 0 -0.5rem -0.25rem -0.5rem;
  }

  .arrows > a:hover {
    background: var(--white);
    color: var(--black);
  }

  .large-image {
    border: 0.5rem solid;
  }

  .small-image {
    border: 0.2rem solid;
  }

  @media screen and (max-width: 834px) {
    .image {
      margin-bottom: 2rem;
    }
  }

  @media screen and (min-width: 834px) {
    .image {
      margin-bottom: 1rem;
    }
  }
`;

export default Article;
