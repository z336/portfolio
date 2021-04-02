import styled from 'styled-components';

const Article = styled.article`
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 1rem;

  p,
  li {
    line-height: 1.8rem;
  }

  p,
  ol,
  ul,
  img {
    margin: 0 0 2rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 1rem;
  }

  img {
    border-radius: 3px;
  }

  a:hover {
    color: var(--red);
  }
`;

export default Article;
