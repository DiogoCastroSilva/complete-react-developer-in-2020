import React, { useState } from 'react';

import { SignUpContainer, TitleContainer } from './sign-up.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


const SignUp = ({ onSignUpStart }) => {
    const [signUpData, setSignUpData] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = async e => {
        e.preventDefault();

        const { displayName, email, password, confirmPassword } = signUpData;

        if (password !== confirmPassword) {
            alert('Passwords don\'t match');
            return;
        }

        onSignUpStart(email, password, displayName);
    }

    const handleChange = e => {
        const { name, value } = e.target;

        setSignUpData({ ...signUpData, [name]: value });
    }

    return (
        <SignUpContainer>
            <TitleContainer>I don't have an account!</TitleContainer>
            <span>Sign up with your email and password</span>
            <form
                onSubmit={handleSubmit}
            >
                <FormInput
                    type='text'
                    name='displayName'
                    value={signUpData.displayName}
                    label='Display Name'
                    handleChange={handleChange}
                />
                <FormInput
                    type='email'
                    name='email'
                    value={signUpData.email}
                    label='Email'
                    handleChange={handleChange}
                />
                <FormInput
                    type='password'
                    name='password'
                    value={signUpData.password}
                    label='Password'
                    handleChange={handleChange}
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={signUpData.confirmPassword}
                    label='Confirm Password'
                    handleChange={handleChange}
                />
                <CustomButton type='submit'>
                    SIGN UP
                </CustomButton>
            </form>
        </SignUpContainer>
    );
}

export default SignUp;