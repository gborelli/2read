import React from 'react';
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

// import config from '../config';

const styles = {
  titleLink: {
    color: 'inherit',
    textDecoration: 'none',
  },
  toolbar: {
    justifyContent: 'space-between',
  },
};

const Header = (props) => (
  <AppBar>
    <Toolbar className={props.classes.toolbar}>

      <Typography type="title" color="inherit">
        <a className={props.classes.titleLink} href="/">{props.title}</a>
      </Typography>

      <Typography className={props.classes.details} component="span" color="inherit">
        <strong>N. items:</strong> {props.itemsLength}
      </Typography>

    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Header);




