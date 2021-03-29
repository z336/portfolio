import styled from 'styled-components';

const Section = styled.section`
  max-width: 125ch;
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

  img {
    border: 3px solid currentColor;
    border-radius: 2px;
  }

  a:hover {
    color: var(--red);
  }
`;

export default Section;
