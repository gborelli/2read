import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  background-color: rgba(255, 255, 255, .9);
  min-height: 100%;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: ${(props) => props.isLoading ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
`;

const Loader = (props) => (
  <LoaderWrapper isLoading={props.isLoading}>
    <CircularProgress />
  </LoaderWrapper>
);

export default Loader;
