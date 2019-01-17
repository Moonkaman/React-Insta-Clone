import React from 'react';
import HeaderNav from '../HeaderNav/HeaderNav';
import PostsContainer from './PostsContainer';

import dummyData from '../../dummy-data';

class PostPage extends React.Component{
  constructor() {
    super();
    this.state = {
      allPosts: [],
      searchPosts: [],
      searchInput: '',
    }
  }

  componentDidMount() {
    if(localStorage.getItem('fakeInstaDataNB') === null) {
      localStorage.setItem('fakeInstaDataNB', JSON.stringify(dummyData));
      this.setState({
        allPosts: dummyData,
        searchPosts: dummyData
      })
    } else {
      this.setState({
        allPosts: JSON.parse(localStorage.getItem('fakeInstaDataNB')),
        searchPosts: JSON.parse(localStorage.getItem('fakeInstaDataNB'))
      })
    }
  }

  addComment = (username,timestamp,commentText) => {
    this.setState({
      allPosts: this.state.allPosts.map(post => {
        if(post.username === username && post.timestamp === timestamp) {
          return {...post, comments: [...post.comments, {
            username: localStorage.getItem('nb-insta-username'),
            text: commentText
          }]
          }
        } else {
          return post;
        }
      })
    }, _ => {
      this.handleSearch()
      localStorage.setItem('fakeInstaDataNB', JSON.stringify(this.state.allPosts));
    });
  }

  removeComment = (username, timestamp, commentIndex) => {
    this.setState({
      allPosts: this.state.allPosts.map(post => {
        if(post.username === username && post.timestamp === timestamp) {
          return {...post, comments: post.comments.filter((comment, index) => index !== commentIndex)};
        } else {
          return post;
        }
      })
    }, _ => {
      this.handleSearch()
      localStorage.setItem('fakeInstaDataNB', JSON.stringify(this.state.allPosts));
    })
  }

  changeLikes = (username,timestamp,action) => {
    this.setState({
      allPosts: this.state.allPosts.map(post => {
        if(username === post.username && timestamp === post.timestamp) {
          if(action === 'like') {
            return {...post, likes: ++post.likes, liked: true};
          } else {
            return {...post, likes: --post.likes, liked: false};
          }
        } else {
          return post;
        }
      })
    }, _ => {
      this.handleSearch()
      localStorage.setItem('fakeInstaDataNB', JSON.stringify(this.state.allPosts));
    })
  }

  handleSearchChange = e => {
    this.setState({
      searchInput: e.target.value
    }, _ => this.handleSearch())
  }

  handleSearch = e => {
    // This if statement makes sure I can call this function without an event as well
    if(e !== undefined) {
      e.preventDefault();
    }
    this.setState({
      searchPosts: this.state.allPosts.filter(post => post.username.toLowerCase().includes(this.state.searchInput.toLowerCase()))
    })
  }

  render() {
    return (
      <>
        <HeaderNav searchInput={this.state.searchInput} handleSearchChange={this.handleSearchChange} handleSearch={this.handleSearch} />
        <PostsContainer allPosts={this.state.searchInput !== '' ? this.state.searchPosts : this.state.allPosts} addComment={this.addComment} changeLikes={this.changeLikes} removeComment={this.removeComment} />
      </>
    )
  }
}

export default PostPage;
