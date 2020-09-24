import React, { Component } from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
    };

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div className='sign-in'>
                <h2>I alredy have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}
                        label='email'
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        required
                        handleChange={this.handleChange}
                        label='passsword'
                    />
                    <CustomButton
                        type='submit'
                    >
                        Sign In
                    </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;