import React, { Component } from 'react';

import {
    SignInContainer,
    TitleContainer,
    ButtonsBarContainer
} from './sign-in.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

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
                            onClick={signInWithGoogle}
                            color='primary'
                        >
                            Sign in with Google 
                        </CustomButton>
                    </ButtonsBarContainer>
                </form>
            </SignInContainer>
        );
    }
}

export default SignIn;