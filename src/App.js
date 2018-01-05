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


const PAGE_SIZE = 6;

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      items: [],
      allItems: null,
      pageSize: PAGE_SIZE,
      filters: [],
      isLoading: true,
    };
    this.resetFilter = this.resetFilter.bind(this);
    this.filterByTag = this.filterByTag.bind(this);
    this.loadMore = this.loadMore.bind(this);

  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const docEl = document.documentElement;
      if ( (window.innerHeight + docEl.scrollTop) >= docEl.offsetHeight )  {
        this.loadMore();
      }
    });

    if (! this.state.allItems) {
      fetch('/items.json')
      .then(data => (
        data.json()
      ))
      .then(items => {
        this.setState({
          isLoading: false,
          allItems: items,
        });
        this.loadMore();
      });
    }
  }

  loadMore(start = 0) {
    const currentSize = this.state.pageSize;
    let items = this.state.allItems || [];
    items = items.slice(this.state.paginationStart, currentSize);
    this.setState({pageSize: (currentSize + PAGE_SIZE), items});
  }

  resetFilter () {
    this.setState({
      items: this.loadMore(),
      filters: [],
    });
  }

  filterByTag (tag) {
    const items = this.state.allItems.filter(i => (i.tags && i.tags[tag]));
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
              isLoading={this.state.isLoading}
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
