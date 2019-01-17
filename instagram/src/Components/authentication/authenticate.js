import React from 'react';

const authenticate = ComponentPost => ComponentLogin => props =>
  class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        loggedIn: null
      }
    }

    componentDidMount() {
      if(localStorage.getItem('nb-insta-username') !== null) {
        this.setState({
          loggedIn: true
        })
      }
    }

    render() {
      if(this.state.loggedIn === true) {
        return <ComponentPost
        searchInput={this.props.searchInput}
        handleSearchChange={this.props.handleSearchChange}
        handleSearch={this.props.handleSearch}
        allPosts={this.props.allPosts}
        addComment={this.props.addComment}
        changeLikes={this.props.changeLikes}
        />
      }
      
      return <ComponentLogin />
    }
  }

export default authenticate;