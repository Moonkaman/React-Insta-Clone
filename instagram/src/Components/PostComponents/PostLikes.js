import React from 'react'
import PropTypes from 'prop-types'

const PostLikes = props => {
  return (
    <div className='post-likes'>
      {props.liked ? <i className="fas fa-heart" onClick={_ => props.handleLike('dislike')}></i> : <i className="far fa-heart" onClick={_ => props.handleLike('like')}></i>}
      <i className="far fa-comment"></i>
      <p>{props.likes} likes</p>
    </div>
  )
}

PostLikes.propTypes = {
  likes: PropTypes.number
}

export default PostLikes
