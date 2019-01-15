import React from 'react'
import PropTypes from 'prop-types'
import PostHeader from './PostHeader';
import PostLikes from './PostLikes';
import PostCommentList from './PostCommentList';
import PostCommentForm from './PostCommentForm';

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      commentInput: ''
    }
  }

  render() {
    return (
      <div className='post-cont'>
        <PostHeader src={this.props.post.thumbnailUrl} username={this.props.post.username} />
        <img src={this.props.post.imageUrl} alt="" className="post-main-img"/>
        <div className="post-comments-likes">
          <PostLikes likes={this.props.post.likes} />
          <PostCommentList comments={this.props.post.comments} />
          <PostCommentForm
          commentInput={this.state.commentInput}
          handleCommentInput={this.handleCommentInput}
          handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    )
  }

  handleSubmit = e => {
    e.preventDefault();
    if(this.state.commentInput !== ''){
      this.props.addComment(this.props.post.username, this.props.post.timestamp, this.state.commentInput, 'Guest_User', e);
      this.setState({
        commentInput: ''
      });
    }
  }

  handleCommentInput = e => {
    this.setState({
      commentInput: e.target.value
    })
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    }))
  })
}

export default Post
