import React, { Component } from 'react';
import HeaderNav from './Components/HeaderNav/HeaderNav'
import PostsContainer from './Components/PostComponents/PostsContainer';

import dummyData from './dummy-data';

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      allPosts: dummyData
    }
  }

  render() {
    return (
      <div className="App">
        <HeaderNav />
        <PostsContainer allPosts={this.state.allPosts} />
      </div>
    );
  }
}

export default App;
