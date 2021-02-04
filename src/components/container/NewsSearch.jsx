/* eslint-disable max-len */
import React from 'react';
import Search from '../presentational/Search';
import Articles from '../presentational/Articles';
import { getArticles } from '../services/Services';

export default class NewsSearch extends React.Component {
  
  state = {
    searchText: '',
    searchResults: []
  }

  componentDidMount() {
    getArticles()
      .then(searchResults => this.setState({ searchResults }));
  }

  handleClick = (e) => {
    this.setState({ searchText: e.target.value });
  }

  handleSubmit = async(e) => {
    e.preventDefault();
    await getArticles(this.state.searchText)
      .then(searchResults => this.setState({ searchResults }));
  }
  
  render() {
    return (
      <div style={{  width: '85vh', height: '90vw' }}>
        <h1>EXTRA EXTRA, READ ALL ABOUT IT</h1>
        <Search
          searchText = {this.state.searchText}
          handleClick = {this.handleClick}
          handleSubmit = {this.handleSubmit}
        />

        <Articles searchResults = {this.state.searchResults} />
      </div>
    );
  }
}
