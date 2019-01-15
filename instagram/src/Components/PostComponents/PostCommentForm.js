import React from 'react';
import PropTypes from 'prop-types';

const PostCommentForm = props => {
  return (
    <form action="" onSubmit={props.handleSubmit}>
      <input 
      className='add-comment-input'
      type="text"
      placeholder='Add a comment...'
      value={props.commentInput}
      onChange={props.handleCommentInput}
      />
      <a href="">...</a>
    </form>
  )
}

PostCommentForm.propTypes = {

}

export default PostCommentForm;
