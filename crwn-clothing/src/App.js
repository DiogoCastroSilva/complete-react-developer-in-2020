import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Home from './pages/home/home.component';
import Shop from './pages/shop/shop.component';

function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/shop' component={Shop} />
    </Switch>
    </div>
  );
}

export default App;