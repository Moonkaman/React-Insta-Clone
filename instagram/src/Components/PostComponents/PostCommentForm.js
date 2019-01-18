import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentForm = styled.form`
  margin-top: 10px;
  text-align: left;
  display: flex;
  align-items: center;
`

const CommentInput = styled.input`
  font-size: 18px;
  width: 100%;
  padding: 8px 0;
  outline: none;
  border: none;
`

const CommentMoreActions = styled.p`
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: bold;
`

const PostCommentForm = props => {
  return (
    <CommentForm action="" onSubmit={props.handleSubmit}>
      <CommentInput 
      className='add-comment-input'
      type="text"
      placeholder='Add a comment...'
      value={props.commentInput}
      onChange={props.handleCommentInput}
      />
      <CommentMoreActions>...</CommentMoreActions>
    </CommentForm>
  )
}

PostCommentForm.propTypes = {
  handleSubmit: PropTypes.func,
  commentInput: PropTypes.string,
  handleCommentInput: PropTypes.func
}

export default PostCommentForm;
