import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostLikesWrapper = styled.div`
  text-align: left;
  padding-top: 10px;
`

const PostLikesIcons = styled.i`
  font-size: 26px;
  margin-right: 14px;
  cursor: pointer;
`

const PostLikesNum = styled.p`
  font-weight: bold;
  margin-top: 10px;
`

const PostLikes = props => {
  return (
    <PostLikesWrapper>
      {props.liked ? <PostLikesIcons className="fas fa-heart" onClick={_ => props.handleLike('dislike')}></PostLikesIcons> : <PostLikesIcons className="far fa-heart" onClick={_ => props.handleLike('like')}></PostLikesIcons>}
      <PostLikesIcons className="far fa-comment"></PostLikesIcons>
      <PostLikesNum>{props.likes} likes</PostLikesNum>
    </PostLikesWrapper>
  )
}

PostLikes.propTypes = {
  likes: PropTypes.number
}

export default PostLikes;
