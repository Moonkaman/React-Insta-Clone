import React from 'react'
import PropTypes from 'prop-types'
import PostHeader from './PostHeader';
import PostLikes from './PostLikes';

const Post = props => {
  return (
    <div className='post-cont'>
      <PostHeader src={props.post.thumbnailUrl} username={props.post.username} />
      <img src={props.post.imageUrl} alt="" className="post-main-img"/>
      <PostLikes likes={props.post.likes} />
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    }))
  })
}

export default Post
