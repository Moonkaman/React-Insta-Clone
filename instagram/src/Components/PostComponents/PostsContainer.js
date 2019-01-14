import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostsContainer = props => {
  return (
    <div>
      {props.allPosts.map(post => <Post key={post.timestamp + post.username} post={post} />)}
    </div>
  )
}

PostsContainer.propTypes = {
  allPosts: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    }))
  }))
};

export default PostsContainer;
