import React, { Component } from 'react';

import {
    SignInContainer,
    TitleContainer,
    ButtonsBarContainer
} from './sign-in.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { googleSignInStart } from '../../redux/user/user.actions';

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

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.error('Error signing in', error);
        }
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
        onGoogleSignInStart: () => dispatch(googleSignInStart())
    };
};

export default connect(null, mapDispatchToProps)(SignIn);