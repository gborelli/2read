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


const formatDate = (timestamp) => {
  const dateObj = new Date(timestamp * 1000);
  if (dateObj.getFullYear() > 1970) {
    return dateObj.toLocaleDateString();
  }
  return '';
};

const styles = theme => ({
  actions: {
    marginTop: theme.spacing.unit,
  },
  cardMedia: {
    height: '250px',
  },
  button: {
    position: 'absolute',
    bottom: theme.spacing.unit,
  }
});


const Authors = (props) => (
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
);


const Metadata = styled.ul`
  list-style-type: none;
  padding-left: 0;
  ul {
    list-style-type: none;
    madding-left: 1em;
  }
`;

const TitleLink = styled.a`
  text-decoration: none;
  color: inherit;
`;


const Item = (props) => (
  <Card className="articleCard">
    <CardHeader
      title={<TitleLink href={props.resolved_url}>{props.given_title || props.resolved_title}</TitleLink>}
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
        <Metadata>
          <li><strong>Added:</strong> {formatDate(props.time_added)}</li>
          <li><strong>Words count:</strong> {props.word_count}</li>
          { props.authors && <li><strong>Authors:</strong> <Authors authors={props.authors} /></li> }
        </Metadata>

      </Typography>

    </CardContent>

    <CardActions className={props.classes.actions}>
      <Button
        dense
        color="primary"
        className={props.classes.button}
        href={props.resolved_url}>Open
        { <ChevronRight /> }
      </Button>
    </CardActions>

  </Card>
);


export default withStyles(styles)(Item);
