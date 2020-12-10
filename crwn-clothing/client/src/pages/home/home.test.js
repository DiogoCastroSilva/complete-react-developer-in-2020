import React from 'react';
import { shallow } from 'enzyme';

import Home from './home.component';


describe('testing Home component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Home />);
    });

    it('should render a Home component', () => {
        expect(wrapper).toMatchSnapshot();
    });
});