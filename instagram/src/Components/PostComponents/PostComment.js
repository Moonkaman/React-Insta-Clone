import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const CommentContainer = styled.div`
  margin-bottom: 5px;
`
const Comment = styled.p`
  margin: 0px;
`

const PostComment = props => {
  return (
    <CommentContainer>
      <Comment><strong>{props.username}</strong> {props.commentText}</Comment>
    </CommentContainer>
  )
}

PostComment.propTypes = {
  username: PropTypes.string,
  commentText: PropTypes.string
}

export default PostComment;