import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SignUpContainer, TitleContainer } from './sign-up.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';


class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert('Passwords don\'t match');
            return;
        }

        const { onSignUpStart } = this.props;
        
        onSignUpStart(email, password, displayName);
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <SignUpContainer>
                <TitleContainer>I don't have an account!</TitleContainer>
                <span>Sign up with your email and password</span>
                <form
                    onSubmit={this.handleSubmit}
                >
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        label='Display Name'
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        label='Email'
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        label='Password'
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        label='Confirm Password'
                        handleChange={this.handleChange}
                    />
                    <CustomButton type='submit'>
                        SIGN UP
                    </CustomButton>
                </form>
            </SignUpContainer>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSignUpStart: (email, password, displayName) => dispatch(signUpStart(email, password, displayName))
    };
};

export default connect(null, mapDispatchToProps)(SignUp);