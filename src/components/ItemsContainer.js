import { sha1 } from 'object-hash';
import styled from 'styled-components';
import React from 'react';

import Item from './Item';


const GridList = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  flex-wrap: wrap;
`;

const ItemsContainer = (props) => {

  return (
    <GridList>
      {props.items.map(i => (
        <Item
          key={sha1(i)}
          filterByTag={props.filterByTag}
          {...i}
        />
      ))}
    </GridList>
  )
}
export default ItemsContainer;
