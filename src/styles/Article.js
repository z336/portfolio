import styled from 'styled-components';

const Article = styled.article`
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

  img {
    border: 3px solid currentColor;
    border-radius: 2px;
  }
`;

export default Article;
