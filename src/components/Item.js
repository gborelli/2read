import React from 'react';
import styled from 'styled-components';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
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

const Image = styled.img`
  max-width: 150px;
  float: left;
  margin-right: 3px;
`;


const Item = (props) => (
  <Card style={style.card} className="articleCard">
    <CardTitle
      title={props.given_title}
      subtitle={ props.tags && <Tags {...props} /> } />

    <CardText>
      <div>
        { props.has_image === '1' && <Image src={props.image.src} /> }
        <Divider />
        <span>{props.excerpt}</span>{ ' ' }
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
      <FlatButton
        label="Open"
        labelPosition="before"
        primary={true}
        href={props.resolved_url}
        icon={ <ChevronRightIcon /> } />
    </CardActions>

  </Card>
);

export default Item;

