import 'whatwg-fetch';

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import config from './config';

import ItemsContainer from './components/ItemsContainer';
import AppWrapper from './components/AppWrapper';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

let allItems = null;


class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      items: [],
      filters: [],
    };
    this.resetFilter = this.resetFilter.bind(this);
    this.filterByTag = this.filterByTag.bind(this);
  }

  componentWillMount() {
    if (! allItems) {
      fetch('/items.json')
      .then(data => (
        data.json()
      ))
      .then(items => {
        allItems = items;
        this.setState({items});
      });
    }
  }

  resetFilter () {
    this.setState({
      items: allItems,
      filters: [],
    });
  }

  filterByTag (tag) {
    const items = allItems.filter(i => (i.tags && i.tags[tag]));
    this.setState({items, filters: [ tag, ]});
  }

  render() {
    const { items } = this.state;

    return (
      <MuiThemeProvider>
        <AppWrapper>
          <Helmet>
            <title>{config.title}</title>
          </Helmet>

          <Header title={config.title} />
          <Main>
            <SearchBar
              resetFilter={this.resetFilter} 
              filters={this.state.filters} />

            <ItemsContainer
              items={items}
              filterByTag={this.filterByTag} />
          </Main>
          <Footer />
        </AppWrapper>
      </MuiThemeProvider>
    );
  }
}

export default App;
