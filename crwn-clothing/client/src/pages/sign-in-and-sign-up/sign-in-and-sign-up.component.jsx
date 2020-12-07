import React from 'react';

import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';

import SignInContainer from '../../containers/sign-in.container';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUp = () => (
    <SignInAndSignUpContainer>
        <SignInContainer />
        <SignUp />
    </SignInAndSignUpContainer>
);

export default SignInAndSignUp;