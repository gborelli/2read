import React from 'react';
import styled from 'styled-components';
import Link from './Link';

const TagWrapper = styled.div`
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
    <TagWrapper>
      {
        Object.keys(props.tags).map(k => {
          const el = props.tags[k];
          return <Tag key={k} text={el.tag} onClick={ () => {props.filterByTag(k)} }/>
        })
      }
    </TagWrapper>
  </div>
);


export default TagContainer;
