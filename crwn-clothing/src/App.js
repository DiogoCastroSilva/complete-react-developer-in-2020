import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Home from './pages/home/home.component';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/shop' component={Shop} />
      <Route path='/signin' component={SignInAndSignUp} />
    </Switch>
    </div>
  );
}

export default App;