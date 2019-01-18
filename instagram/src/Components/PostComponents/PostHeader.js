import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: white;
  padding: 10px;
`

const PostHeaderImg = styled.img`
  width: 35px;
  height: auto;
  border-radius: 100%;
  margin-right: 10px;
`

const PostHeaderUserName = styled.div`
  font-weight: bold;
`

const PostHeader = props => {
  return (
    <PostHeaderWrapper>
      <PostHeaderImg src={props.src} alt=""/>
      <PostHeaderUserName>{props.username}</PostHeaderUserName>
    </PostHeaderWrapper>
  )
}

PostHeader.propTypes = {
  src: PropTypes.string,
  username: PropTypes.string
}

export default PostHeader;
