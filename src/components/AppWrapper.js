import styled from 'styled-components';
import config from '../config';

const AppWrapper = styled.div`
  font-family: Roboto, sans-serif;
  @media screen and (${config.mediumDevices}) {
    max-width: 60%;
    margin: 0 auto;
    .articleCard {
      width: 49%;
    }
  }
`;

export default AppWrapper;
