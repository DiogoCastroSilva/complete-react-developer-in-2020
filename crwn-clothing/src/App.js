import React, { Component } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Home from './pages/home/home.component';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

class App extends Component {
  unsubscribeFromAuth = null;

  constructor() {
    super();
    
    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
        <Route path='/signin' component={SignInAndSignUp} />
      </Switch>
      </div>
    );
  }
}

export default App;