import { sha1 } from 'object-hash';
import styled from 'styled-components';
import React from 'react';
import Loader from './Loader';
import Item from './Item';


const GridList = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  flex-wrap: wrap;
  position: relative;
  min-height: 300px;
`;

const ItemsContainer = (props) => {

  return (
    <GridList>
      {props.items.map(i => (
        <Item
          key={sha1(i)}
          filters={props.filters}
          filterByTag={props.filterByTag}
          {...i}
        />
      ))}
      <Loader isLoading={props.isLoading}/>
    </GridList>
  )
}
export default ItemsContainer;
