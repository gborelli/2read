import React from 'react';
import Divider from 'material-ui/Divider';
import styled from 'styled-components';
import Link from './Link';

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;


export const Tag = props => (
  <Link
    href="#"
    onClick={ props.onClick }
    >{props.text}</Link>
);


const TagContainer = props => (
  <div>
    <Divider />
    <StyledContainer>
      {
        Object.keys(props.tags).map(k => {
          const el = props.tags[k];
          return <Tag key={el.item_id} text={el.tag} onClick={ () => {props.filterByTag(k)} }/>
        })
      }
    </StyledContainer>
  </div>
);


export default TagContainer;
