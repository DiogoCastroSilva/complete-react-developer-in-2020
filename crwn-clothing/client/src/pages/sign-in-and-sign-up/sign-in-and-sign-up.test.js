import React from 'react';
import { shallow } from 'enzyme';

import SignInAndSignUp from './sign-in-and-sign-up.component';


describe('testing SignInAndSignUp component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<SignInAndSignUp />);
    });

    it('should render a SignInAndSignUp component', () => {
        expect(wrapper).toMatchSnapshot();
    });
});