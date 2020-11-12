import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
    SignInContainer,
    TitleContainer,
    ButtonsBarContainer
} from './sign-in.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

const SignIn = ({ onEmailSignInStart, onGoogleSignInStart }) => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = credentials;

        onEmailSignInStart(email, password);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setCredentials({
            ...credentials,
            [name]: value
        });
    };

    return (
        <SignInContainer>
            <TitleContainer>I alredy have an account</TitleContainer>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    value={credentials.email}
                    required
                    handleChange={handleChange}
                    label='email'
                />
                <FormInput
                    name='password'
                    type='password'
                    value={credentials.password}
                    required
                    handleChange={handleChange}
                    label='passsword'
                />
                <ButtonsBarContainer>
                    <CustomButton
                        type='submit'
                    >
                        Sign in
                    </CustomButton>
                    <CustomButton
                        onClick={onGoogleSignInStart}
                        color='primary'
                        type='button'
                    >
                        Sign in with Google 
                    </CustomButton>
                </ButtonsBarContainer>
            </form>
        </SignInContainer>
    );
}


const mapDispatchToProps = dispatch => {
    return {
        onGoogleSignInStart: () => dispatch(googleSignInStart()),
        onEmailSignInStart: (email, password) => dispatch(emailSignInStart({
            email: email,
            password: password
        }))
    };
};

export default connect(null, mapDispatchToProps)(SignIn);