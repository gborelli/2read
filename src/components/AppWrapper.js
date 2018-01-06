import styled from 'styled-components';
import config from '../config';

const marginTop = '4em';

const AppWrapper = styled.div`
  font-family: Roboto, sans-serif;
  margin-top: ${marginTop};
  z-index: 2;
  .articleCard {
    margin-bottom: ${config.defaultPadding};
    position: relative;
  }
  @media screen and (${config.mediumDevices}) {
    max-width: 60%;
    margin: ${marginTop} auto 0;
    .articleCard {
      width: 49%;
    }
  }
`;

export default AppWrapper;
