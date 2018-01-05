import React from 'react';
import styled from 'styled-components';
import { Card, CardActions, CardMedia, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import ChevronRightIcon from 'material-ui/svg-icons/navigation/chevron-right';
import Tags from './Tags';
import Link from './Link';


const style = {
  card: {
    marginBottom: '1em',
    // width: '49%',
  },
  actions: {
    textAlign: 'right',
  }
};


// @media screen and (${config.mediumDevices}) {
//   max-width: 60%;
//   margin: 0 auto;
// }

const ImageWrapper = styled.div`
  max-height: 250px;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
`;

const TitleLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Item = (props) => (
  <Card style={style.card}>
    <CardHeader
      title={<TitleLink href={props.resolved_url}>{props.given_title}</TitleLink>}
      showExpandableButton={false}
      subtitle={ props.tags && <Tags {...props} /> } />

    { props.has_image === '1' &&
      <CardMedia>
        <ImageWrapper>
          <img src={props.image.src} alt={props.given_title} />
        </ImageWrapper>
      </CardMedia>
    }
    <CardText>
      <div>
        <span>{props.excerpt}</span>{ ' ' }

        <Divider />
        <span>{props.word_count}</span>{ ' ' }
        <span>{props.time_added}</span>{ ' ' }
        <span>{props.time_read}</span>
        <ul>
          {
            props.authors && Object.values(props.authors).map(i => (
              <li key={ i.author_id } >{
                i.url ?
                  <Link href={i.url}>{i.name}</Link> :
                  <span>{i.name}</span>
                }
              </li>
            ))
          }
        </ul>

      </div>
    </CardText>

    <CardActions style={style.actions}>
      <RaisedButton
        label="Open"
        labelPosition="before"
        primary={true}
        href={props.resolved_url}
        icon={ <ChevronRightIcon /> } />
    </CardActions>

  </Card>
);

export default Item;

