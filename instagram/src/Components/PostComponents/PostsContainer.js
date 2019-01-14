import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post';

const PostsContainer = props => {
  return (
    <div>
      <h1>PostsContainer</h1>
      <Post />
    </div>
  )
}

PostsContainer.propTypes = {

}

export default PostsContainer
