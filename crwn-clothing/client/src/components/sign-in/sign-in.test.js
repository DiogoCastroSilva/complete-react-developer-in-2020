import React from 'react';
import { shallow } from 'enzyme';

import SignIn from './sign-in.component';


describe('testing SignIn component', () => {
    let wrapper;
    let onEmailSignInStart;
    let onGoogleSignInStart;

    beforeEach(() => {
        onEmailSignInStart = jest.fn();
        onGoogleSignInStart = jest.fn();

        const mockProps = {
            onEmailSignInStart: onEmailSignInStart,
            onGoogleSignInStart: onGoogleSignInStart
        };

        wrapper = shallow(<SignIn {...mockProps} />);
    });

    it('should render a MenuItem component', () => {
        expect(wrapper).toMatchSnapshot();
    });
});