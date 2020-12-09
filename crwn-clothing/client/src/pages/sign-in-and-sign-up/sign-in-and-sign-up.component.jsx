import React from 'react';

import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';

import SignInContainer from '../../containers/sign-in.container';
import SignUpContainer from '../../containers/sign-up.container';

const SignInAndSignUp = () => (
    <SignInAndSignUpContainer>
        <SignInContainer />
        <SignUpContainer />
    </SignInAndSignUpContainer>
);

export default SignInAndSignUp;