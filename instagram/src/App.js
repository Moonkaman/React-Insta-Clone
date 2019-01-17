import React, { Component } from 'react';
import PostPage from './Components/PostComponents/PostPage';
import LoginPage from './Components/LoginComponents/LoginPage';
import authenticate from './Components/authentication/authenticate';

import './App.css';

const App = props => {
    return (
      <div className="App">
        <PostPage />
      </div>
    );
}

export default authenticate(LoginPage)(App);