import React from 'react';
import styled from 'styled-components';

import PostPage from './Components/PostComponents/PostPage';
import LoginPage from './Components/LoginComponents/LoginPage';
import authenticate from './Components/authentication/authenticate';

const AppWrap = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i');
  font-family: Roboto;
`

const App = props => {
    return (
      <AppWrap className="App">
        <ConditionalView />
      </AppWrap>
    );
}

// More common way to handle an HOC in real projects
const ConditionalView = authenticate(LoginPage)(PostPage);

export default App;

// Another way to handle authenticate
// export default authenticate(LoginPage)(App);