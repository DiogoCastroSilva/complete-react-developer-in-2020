import React from 'react';
import { connect } from 'react-redux';

import { emailSignInStart, googleSignInStart } from '../redux/user/user.actions';
import SignIn from '../components/sign-in/sign-in.component';



const SignInContainer = ({ onGoogleSignInStart, onEmailSignInStart }) => (
    <SignIn
        onGoogleSignInStart={onGoogleSignInStart}
        onEmailSignInStart={onEmailSignInStart}
    />
);

const mapDispatchToProps = dispatch => {
    return {
        onGoogleSignInStart: () => dispatch(googleSignInStart()),
        onEmailSignInStart: (email, password) => dispatch(emailSignInStart({
            email: email,
            password: password
        }))
    };
};

export default connect(null, mapDispatchToProps)(SignInContainer);