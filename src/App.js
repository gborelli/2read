import 'whatwg-fetch';
import 'typeface-roboto';
import "babel-polyfill";

import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import Reboot from 'material-ui/Reboot';
import config from './config';

import ItemsContainer from './components/ItemsContainer';
import AppWrapper from './components/AppWrapper';
import Header from './components/Header';
import Main from './components/Main';
import SearchBar from './components/SearchBar';


// npm install babel-polyfill

let ALLITEMS = null;

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      filters: [],
      isLoading: true,

      filteredItems: null,
      items: [],

      pageSize: 6,
      pageStart: 0,

    };
    this.resetFilter = this.resetFilter.bind(this);
    this.filterByTag = this.filterByTag.bind(this);
    this.getLoadedItems = this.getLoadedItems.bind(this);

  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const docEl = document.documentElement;
      if ( (window.innerHeight + docEl.scrollTop) >= docEl.offsetHeight )  {
        this.setState({
          items: this.getLoadedItems(this.state.filteredItems),
        });
      }
    });

    if (! ALLITEMS) {
      fetch('/items.json')
      .then(data => (
        data.json()
      ))
      .then(items => {
        ALLITEMS = items;
        this.setState({
          isLoading: false,
          filteredItems: items,
          items: this.getLoadedItems(items, 0),
        });
      });
    }
  }

  getLoadedItems(filteredItems, forcedStart) {
    const { items, pageSize, pageStart } = this.state;
    let start = (typeof forcedStart !== 'undefined') ? forcedStart : items.length;
    // take a list of items from 0 to items.length + pagesize
    return filteredItems.slice(pageStart, (start + pageSize) );
  }

  resetFilter () {
    this.setState({
      filteredItems: ALLITEMS,
      items: this.getLoadedItems(ALLITEMS, 0),
      filters: [],
    });
  }

  filterByTag (tag) {
    const filteredItems = ALLITEMS.filter(i => (i.tags && i.tags[tag]));
    this.setState({
      filteredItems,
      filters: [ tag, ],
      items: this.getLoadedItems(filteredItems, 0),
    });

  }

  render() {
    const { items, filteredItems, pageSize } = this.state;

    return (
      <div>
        <Reboot />
        <Helmet>
          <title>{config.title}</title>
        </Helmet>

        <Header
          title={config.title}
          itemsLength={filteredItems && filteredItems.length}
          pageSize={pageSize} />

        <AppWrapper>
          <Main>
            <SearchBar
              resetFilter={this.resetFilter} 
              filters={this.state.filters} />
            <ItemsContainer
              isLoading={this.state.isLoading}
              items={items}
              filterByTag={this.filterByTag} />
          </Main>
        </AppWrapper>
      </div>
    );
  }
}

export default App;
