import config from '../config';

import React from 'react';
import Chip from 'material-ui/Chip';

import styled from 'styled-components';


const SearchBarWrapper = styled.div`
  display: flex;
  margin-bottom: ${config.defaultPadding};
`;

const SearchBar = (props) => (
  <SearchBarWrapper>
    {props.filters.map(i=>(
      <Chip
        key={i}
        style={ {marginRight: '4px'} }
        labelStyle={ {minWidth: '80px'} }
        onRequestDelete={ (i) => {props.resetFilter(i)} }>{i}</Chip>
    ))}
  </SearchBarWrapper>
);

export default SearchBar;
