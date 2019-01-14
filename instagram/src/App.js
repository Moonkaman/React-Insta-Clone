import React, { Component } from 'react';
import HeaderNav from './Components/HeaderNav/HeaderNav'
import PostsContainer from './Components/PostComponents/PostsContainer';

import './App.css';
import SearchBar from './Components/HeaderNav/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderNav />
        <PostsContainer />
      </div>
    );
  }
}

export default App;
