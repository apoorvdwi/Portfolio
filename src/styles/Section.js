import styled from 'styled-components';
import media from './media';

const Section = styled.section`
  margin: 0 auto;
  padding: 100px 0 50px;
  max-width: 1000px;

  ${media.tablet`padding: 75px 0 25px;`};
`;

export default Section;
