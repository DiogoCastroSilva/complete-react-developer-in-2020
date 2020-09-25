import React, { Component } from 'react';

import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';


class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();
    }

    getInitialState() {
        return {
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

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });
            
            this.setState(this.getInitialState());
        } catch (error) {
            console.error(error);
        }
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className='sign-up'>
                <h2 className='title'>I don't have an account!</h2>
                <span>Sign up with your email and password</span>
                <form
                    className='sign-up-form'
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
            </div>
        );
    }
}

export default SignUp;