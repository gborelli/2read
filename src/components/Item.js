import React from 'react';
import styled from 'styled-components';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import ChevronRight from 'material-ui-icons/ChevronRight';
import Tags from './Tags';
import Link from './Link';


const styles = theme => ({
  actions: {
    marginTop: theme.spacing.unit,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  cardMedia: {
    height: '250px',
  },
});


// @media screen and (${config.mediumDevices}) {
//   max-width: 60%;
//   margin: 0 auto;
// }

// const ImageWrapper = styled.div`

//   width: 100%;
//   overflow: hidden;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   img {
//     width: 100%;
//   }
// `;

const TitleLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Item = (props) => (
  <Card className="articleCard">
    <CardHeader
      title={<TitleLink href={props.resolved_url}>{props.given_title}</TitleLink>}
      subheader={ props.tags && <Tags {...props} /> } />

    { props.has_image === '1' &&
      <CardMedia
        className={props.classes.cardMedia}
        image={props.image.src} />
    }
    <CardContent>
      <Typography component="div">
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
      </Typography>

    </CardContent>

    <CardActions className={props.classes.actions}>
      <Button
        raised
        color="primary"
        href={props.resolved_url}>Open
        { <ChevronRight /> }
      </Button>
    </CardActions>

  </Card>
);


export default withStyles(styles)(Item);


