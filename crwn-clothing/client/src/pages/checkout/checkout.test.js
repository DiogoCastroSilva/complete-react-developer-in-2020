import React from 'react';
import { shallow } from 'enzyme';

import Checkout from './checkout.component';


describe('testing Checkout component', () => {
    let wrapper;

    beforeEach(() => {
        const mockProps = {
            cartItems: [],
            total: 0
        };

        wrapper = shallow(<Checkout {...mockProps} />);
    });

    it('should render a Checkout component', () => {
        expect(wrapper).toMatchSnapshot();
    });
});