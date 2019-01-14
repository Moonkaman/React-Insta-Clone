import React from 'react'
import PropTypes from 'prop-types'

const PostLikes = props => {
  return (
    <div className='post-likes'>
      <i className="far fa-heart"></i>
      <i className="far fa-comment"></i>
      <p>{props.likes} likes</p>
    </div>
  )
}

PostLikes.propTypes = {
  likes: PropTypes.number
}

export default PostLikes
