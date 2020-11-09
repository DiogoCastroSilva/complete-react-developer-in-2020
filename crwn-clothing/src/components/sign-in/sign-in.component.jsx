import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    SignInContainer,
    TitleContainer,
    ButtonsBarContainer
} from './sign-in.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { onEmailSignInStart } = this.props;
        const { email, password } = this.state;

        onEmailSignInStart(email, password);
    };

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
    };

    render() {
        const { email, password } = this.state;
        const { onGoogleSignInStart } = this.props;

        return (
            <SignInContainer>
                <TitleContainer>I alredy have an account</TitleContainer>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        value={email}
                        required
                        handleChange={this.handleChange}
                        label='email'
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={password}
                        required
                        handleChange={this.handleChange}
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