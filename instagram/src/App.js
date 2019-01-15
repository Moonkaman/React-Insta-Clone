import React, { Component } from 'react';
import HeaderNav from './Components/HeaderNav/HeaderNav'
import PostsContainer from './Components/PostComponents/PostsContainer';

import dummyData from './dummy-data';

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      allPosts: [],
      searchPosts: [],
      searchInput: '',
    }
  }

  componentDidMount() {
    this.setState({
      allPosts: dummyData,
      searchPosts: dummyData
    })
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
    }, _ => this.handleSearch());
  }

  changeLikes = (username,timestamp,action) => {
    this.setState({
      allPosts: this.state.allPosts.map(post => {
        if(username === post.username && timestamp === post.timestamp) {
          if(action === 'like') {
            return {...post, likes: ++post.likes};
          } else {
            return {...post, likes: --post.likes};
          }
        } else {
          return post;
        }
      })
    }, _ => this.handleSearch())
  }

  handleSearchChange = e => {
    this.setState({
      searchInput: e.target.value
    }, _ => this.handleSearch())
  }

  handleSearch = e => {
    if(e !== undefined) {
      e.preventDefault();
    }
    this.setState({
      searchPosts: this.state.allPosts.filter(post => post.username.toLowerCase().includes(this.state.searchInput.toLowerCase()))
    })
  }

  render() {
    return (
      <div className="App">
        <HeaderNav searchInput={this.state.searchInput} handleSearchChange={this.handleSearchChange} handleSearch={this.handleSearch} />
        <PostsContainer allPosts={this.state.searchInput !== '' ? this.state.searchPosts : this.state.allPosts} addComment={this.addComment} changeLikes={this.changeLikes} />
      </div>
    );
  }
}

export default App;
