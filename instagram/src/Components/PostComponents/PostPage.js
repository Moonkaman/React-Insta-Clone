import React from 'react';
import HeaderNav from '../HeaderNav/HeaderNav';
import PostsContainer from './PostsContainer';

const PostPage = props => {
  return (
    <>
      <HeaderNav searchInput={props.searchInput} handleSearchChange={props.handleSearchChange} handleSearch={props.handleSearch} />
      <PostsContainer allPosts={props.allPosts} addComment={props.addComment} changeLikes={props.changeLikes} />
    </>
  )
}

export default PostPage;
