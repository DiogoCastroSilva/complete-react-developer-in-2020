import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from '../components/header/header.component';

import { signOutStart } from '../redux/user/user.actions';
import { selectCartHidden } from '../redux/cart/cart.selectors';
import { selectCurrentUser } from '../redux/user/user.selectors';


const HeaderContainer = ({ currentUser, hidden, signOutStart }) => (
    <Header
        currentUser={currentUser}
        hidden={hidden}
        signOutStart={signOutStart}
    />
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);