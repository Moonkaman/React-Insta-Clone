import React from 'react';
import PropTypes from 'prop-types';
import PostComment from './PostComment';

const PostCommentList = props => {
  return (
    <div className='comments-cont'>
      {props.comments.map((comment, index) => <PostComment key={comment.username + index} username={comment.username} commentText={comment.text} />)}
    </div>
  )
}

PostCommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  }))
}

export default PostCommentList;
