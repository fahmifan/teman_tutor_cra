import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { 
  LandingPage, 
  LogIn, 
  SignUp,
  Home, 
} from './pages';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/home" component={Home} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
