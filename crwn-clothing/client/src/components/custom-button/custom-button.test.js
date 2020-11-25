import React from 'react';
import { shallow } from 'enzyme';

import CustomButton from './custom-button.component';


describe('testing CustomButon component', () => {
    it('should render the CustomButton', () => {
        expect(shallow(<CustomButton>Button</CustomButton>)).toMatchSnapshot();
    });
});