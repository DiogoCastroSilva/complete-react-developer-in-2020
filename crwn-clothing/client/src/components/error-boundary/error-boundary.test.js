import React from 'react';
import { shallow } from 'enzyme';

import ErrorBoundary from './error-boundary.component';

describe('testing ErrorBoundary component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ErrorBoundary><h1>Child component</h1></ErrorBoundary>);
    });

    it('should render children component when no error', () => {
        expect(wrapper.find('h1').exists()).toBeTruthy();
    });

    it('should render a ErrorBoundary component', () => {
        const errorMessage = 'An error as occoured';

        jest.spyOn(global.console, 'error');
        wrapper.instance().componentDidCatch(errorMessage, '');
        wrapper.update();

        expect(global.console.error).toHaveBeenCalledWith(errorMessage, '');
        expect(wrapper.instance().state.hasError).toBeTruthy();
        expect(wrapper.find('h1').exists()).toBeFalsy();
    });
});