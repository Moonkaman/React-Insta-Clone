import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = props => {
  return (
    <div className='post-header'>
      <img src={props.src} alt=""/>
      <p className="username">{props.username}</p>
    </div>
  )
}

PostHeader.propTypes = {
  src: PropTypes.string,
  username: PropTypes.string
}

export default PostHeader;
