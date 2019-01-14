import React from 'react';
import PropTypes from 'prop-types';

const PostCommentForm = props => {
  return (
    <form action="">
      <input 
      className='add-comment-input'
      type="text"
      placeholder='Add a comment...'
      />
      <a href="">...</a>
    </form>
  )
}

PostCommentForm.propTypes = {

}

export default PostCommentForm;
