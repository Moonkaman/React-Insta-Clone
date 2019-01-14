import React from 'react';
import PropTypes from 'prop-types';

const PostComment = props => {
  return (
    <div className='comment-cont'>
      <p><strong>{props.username}</strong> {props.commentText}</p>
    </div>
  )
}

PostComment.propTypes = {
  username: PropTypes.string,
  commentText: PropTypes.string
}

export default PostComment;