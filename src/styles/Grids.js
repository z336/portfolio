import styled from 'styled-components';

const SiteLayout = styled.div`
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'nav'
    'main'
    'footer';
`;

export default SiteLayout;
