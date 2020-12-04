import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

// Styles
import { GlobalStyle } from './global.styles';

// Pages
import Home from './pages/home/home.component';

// Components
import HeaderContainer from './containers/header.container';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

// Used to add data to firebase
// import { selectCollectionsForPreview } from './redux/shop/shop.selector';

// Lazy loading components
const Shop = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUp = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const Checkout = lazy(() => import('./pages/checkout/checkout.component'));


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
      <GlobalStyle />
      <HeaderContainer />
      <Switch>
        <Route exact path='/' component={Home} />
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
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
          </Suspense>
        </ErrorBoundary>
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