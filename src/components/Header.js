import React from 'react';
import styled from 'styled-components';
import config from '../config';

const StyledHeader = styled.header`
  padding: 0 ${config.defaultPadding};
`;

const Header = (props) => (
  <StyledHeader>
    {/* <img src={logo} className="App-logo" alt="logo" /> */}
    <h1 className="App-title">{props.title}</h1>
  </StyledHeader>
);

export default Header;
