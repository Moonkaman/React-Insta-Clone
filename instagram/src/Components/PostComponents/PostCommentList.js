import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

import PostComment from './PostComment';

const CommentsContainer = styled.div`
  text-align: left;
  padding-top: 10px;
  border-bottom: 1px solid #dddddd;
  padding-bottom: 10px;
`

const PostCommentList = props => {
  return (
    <CommentsContainer>
      {props.comments.map((comment, index) => <PostComment key={comment.username + index} index={index} username={comment.username} postUsername={props.postUsername} timestamp={props.timestamp} commentText={comment.text} removeComment={props.removeComment} />)}
    </CommentsContainer>
  )
}

PostCommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })),
  removeComment: PropTypes.func,
  timestamp: PropTypes.string,
  postUsername: PropTypes.string
}

export default PostCommentList;
