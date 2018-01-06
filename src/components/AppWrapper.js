import styled from 'styled-components';
import config from '../config';

const AppWrapper = styled.div`
  font-family: Roboto, sans-serif;
  margin-top: 4em;
  z-index: 2;
  .articleCard {
    margin-bottom: ${config.defaultPadding};
    position: relative;
  }
  @media screen and (${config.mediumDevices}) {
    max-width: 60%;
    margin: 0 auto;
    .articleCard {
      width: 49%;
    }
  }
`;

export default AppWrapper;
