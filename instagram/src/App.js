import React, { Component } from 'react';
import SerachBar from './Components/HeaderNav/SearchBar';
import PostsContainer from './Components/PostComponents/PostsContainer';

import './App.css';
import SearchBar from './Components/HeaderNav/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostsContainer />
      </div>
    );
  }
}

export default App;
