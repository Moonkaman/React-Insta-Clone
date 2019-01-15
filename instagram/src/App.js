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
        <PostsContainer allPosts={this.state.allPosts} addComment={this.addComment} />
      </div>
    );
  }

  addComment = (username,timestamp,commentText, commentUser, e) => {
    this.setState({
      allPosts: this.state.allPosts.map(post => {
        if(post.username === username && post.timestamp === timestamp) {
          return {...post, comments: [...post.comments, {
            username: commentUser,
            text: commentText
          }]
          }
        } else {
          return post;
        }
      })
    });
  }
}

export default App;
