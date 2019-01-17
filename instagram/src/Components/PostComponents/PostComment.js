import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const CommentContainer = styled.div`
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  &:hover .delete-comment-btn {
    color: black;
  }
`
const Comment = styled.p`
  margin: 0px;
  max-width: 590px;
  word-break: break-all;
`
const DeleteCommentIcon = styled.i`
  cursor: pointer;
  color: transparent;
  transition: color 0.2s ease;
`

const PostComment = props => {
  return (
    <CommentContainer>
      <Comment><strong>{props.username}</strong> {props.commentText}</Comment>
      <DeleteCommentIcon className="fas fa-times delete-comment-btn" onClick={_ => props.removeComment(props.postUsername, props.timestamp, props.index)}></DeleteCommentIcon>
    </CommentContainer>
  )
}

PostComment.propTypes = {
  username: PropTypes.string,
  commentText: PropTypes.string,
  index: PropTypes.number,
  removeComment: PropTypes.func,
  timestamp: PropTypes.string,
  postUsername: PropTypes.string
}

export default PostComment;