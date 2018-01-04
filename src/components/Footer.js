import React from 'react';
import config from '../config';
import styled from 'styled-components';


const StyledFooter = styled.footer`
  padding: 0 ${config.defaultPadding};
  font-size: 70%;
  text-align: right;
`;

const Footer = () => (
  <StyledFooter>&copy; 2018 &ndash; Giorgio Borelli.</StyledFooter>
);

export default Footer;
