import React from 'react';
import { shallow } from 'enzyme';

import SignUp from './sign-up.component';


describe('testing SignUp component', () => {
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

        wrapper = shallow(<SignUp {...mockProps} />);
    });

    it('should render a SignUp component', () => {
        expect(wrapper).toMatchSnapshot();
    });
});