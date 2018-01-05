import config from '../config';

import React from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Chip from 'material-ui/Chip';


const styles = theme => ({
  searchBar: {
    display: 'flex',
    marginBottom: config.defaultPadding,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
});

const SearchBar = (props) => (
  <Typography component="div" className={props.classes.searchBar}>
    { (props.filters && props.filters.length) ? <strong>Filtered by </strong> : '' }
    { props.filters.map(i=>(
      <Chip
        className={props.classes.chip}
        key={i}
        label={i}
        onDelete={ (i) => {props.resetFilter(i)} } />
    ))}
  </Typography>
);

export default withStyles(styles)(SearchBar);

