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


let ALLITEMS = null;

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      filters: [],
      isLoading: true,

      filteredItems: [],
      items: [],

      pageSize: 6,
      pageStart: 0,

    };
    this.resetFilter = this.resetFilter.bind(this);
    this.filterByTag = this.filterByTag.bind(this);
    this.getLoadedItems = this.getLoadedItems.bind(this);
    this.filterItems = this.filterItems.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const docEl = document.documentElement;
      // XXX: safari uses body.scrollTop, chrome uses document.scrollTop instead
      const scrollTop = docEl.scrollTop || document.querySelector('body').scrollTop || 0;
      if ( (window.innerHeight + scrollTop) >= docEl.offsetHeight )  {
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

        ALLITEMS = items.sort((a, b) => (b.time_added - a.time_added) );
        this.setState({
          isLoading: false,
          filteredItems: ALLITEMS,
          items: this.getLoadedItems(ALLITEMS, 0),
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

  filterItems (filters) {
    if (! filters.length) {
      return ALLITEMS;
    }

    return ALLITEMS.filter(i => {
      // Return the element that contains all tags in filters
      if (! i.tags) {
        return false;
      }
      let check = true;
      filters.forEach(f => {
        if (! i.tags[f]) {
          check = false;
        }
      });
      return check;
    });
  }

  resetFilter (tag) {
    let { filters } = this.state;
    filters = filters.filter(i => i !== tag);
    const filteredItems = this.filterItems(filters);
    this.setState({
      items: this.getLoadedItems(filteredItems, 0),
      filteredItems,
      filters,
    });
  }

  filterByTag (tag) {
    let { filters } = this.state;
    if ( filters.indexOf(tag) === -1 ) {
      filters.push(tag);
    }
    const filteredItems = this.filterItems(filters);
    this.setState({
      items: this.getLoadedItems(filteredItems, 0),
      filteredItems,
      filters,
    });

  }

  render() {
    const { items, filteredItems, pageSize } = this.state;

    return (
      <AppWrapper>
        <Reboot />
        <Helmet>
          <title>{config.title}</title>
        </Helmet>

        <Header
          title={config.title}
          itemsLength={filteredItems && filteredItems.length}
          pageSize={pageSize} />


        <Main>
          <SearchBar
            resetFilter={this.resetFilter} 
            filters={this.state.filters} />
          <ItemsContainer
            isLoading={this.state.isLoading}
            items={items}
            filters={this.state.filters}
            filterByTag={this.filterByTag} />
        </Main>
      </AppWrapper>

    );
  }
}

export default App;
