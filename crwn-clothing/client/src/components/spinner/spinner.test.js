import React from 'react';
import { shallow } from 'enzyme';

import Spinner from './spinner.component';


describe('Testing Spinner component', () => {

    it('expects to render Spinner component', () => {
        expect(shallow(<Spinner />).length).toEqual(1);

        expect(shallow(<Spinner />)).toMatchSnapshot();
    });

});
