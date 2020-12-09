import React from 'react';
import { connect } from 'react-redux';

import SignUp from '../components/sign-up/sign-up.component';
import { signUpStart } from '../redux/user/user.actions';


const SignUpContainer = ({ onSignUpStart }) => (
    <SignUp
        onSignUpStart={onSignUpStart}
    />
);

const mapDispatchToProps = dispatch => {
    return {
        onSignUpStart: (email, password, displayName) =>
            dispatch(signUpStart(email, password, displayName))
    };
};

export default connect(null, mapDispatchToProps)(SignUpContainer);