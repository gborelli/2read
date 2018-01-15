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


const getTagList = (tags, filters) => (
  Object.keys(tags).filter(
    el => filters.indexOf(el) === -1
  )
);


const TagContainer = props => {
  const { tags, filters, filterByTag } = props;
  return <div>
    <TagWrapper>
      {
        getTagList(tags, filters).map(k => {
          const el = tags[k];
          return <Tag key={k} text={el.tag} onClick={ () => {filterByTag(k)} }/>
        })
      }
    </TagWrapper>
  </div>
};


export default TagContainer;
