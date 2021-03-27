import styled from 'styled-components';

const SiteLayout = styled.div`
  min-height: 100vh;
  margin: 0 auto 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'nav'
    'main'
    'footer';
`;

export default SiteLayout;
