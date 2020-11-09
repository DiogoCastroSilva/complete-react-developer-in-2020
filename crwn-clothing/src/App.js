import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import './App.css';

// Pages
import Home from './pages/home/home.component';
import Shop from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Checkout from './pages/checkout/checkout.component';

// Components
import Header from './components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

// Used to add data to firebase
// import { selectCollectionsForPreview } from './redux/shop/shop.selector';

const App = ({ currentUser, checkUserSession }) => {
  // unsubscribeFromAuth = null;

  useEffect(() => {
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //     userRef.onSnapshot(snapshot => {
    //       setCurrentUser({
    //           id: snapshot.id,
    //           // displayName, email, createdAt
    //           ...snapshot.data()
    //       });
    //     });
    //   } else {
    //     setCurrentUser(userAuth);
    //   }

      // Just to add data to firebase
      // addCollectionAndDocuments(
      //   'collections',
      //   collectionsArray.map(
      //     ({ title, items }) => ({ title, items })
      //   )
      // );
    // });

    checkUserSession();
  }, [checkUserSession]);

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
        <Route exact path='/checkout' component={Checkout} />
        <Route
          exact
          path='/signin'
          render={() => currentUser ?
            <Redirect to='/' /> :
            <SignInAndSignUp />
          }
        />
      </Switch>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    currentUser: selectCurrentUser(state)
    // Just to add the data to firebase
    // collectionsArray: selectCollectionsForPreview(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkUserSession: () => dispatch(checkUserSession())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);