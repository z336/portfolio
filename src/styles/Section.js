import styled from 'styled-components';

const Section = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 0;

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
    border-radius: 3px;
  }

  a:hover {
    color: var(--red);
  }
`;

export default Section;
