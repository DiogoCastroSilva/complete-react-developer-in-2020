import React from 'react';
import { shallow } from 'enzyme';

import WithSpinner from './with-spinner.component';
import Spinner from '../spinner/spinner.component';


describe('testing WithSpinner HOC', () => {

    describe('isLoading false', () => {
        let wrapper;
        const ChildComponent = () => <p>Child component</p>;
        const WrappedComponent = WithSpinner(ChildComponent);
    
        beforeEach(() => {    
            wrapper = shallow(<WrappedComponent isLoading={false} />);
        });
    
        it('should render a Child component', () => {
            expect(wrapper.exists(ChildComponent)).toBe(true);
        });

        it('should not render a Spinner component', () => {
            expect(wrapper.exists(Spinner)).toBe(false);
        });
    });

    describe('isLoading true', () => {
        let wrapper;
        const ChildComponent = <p>Child component</p>;
        const WrappedComponent = WithSpinner(ChildComponent);
    
        beforeEach(() => {    
            wrapper = shallow(<WrappedComponent isLoading={true} />);
        });
    
        it('should not render Child component', () => {
            expect(wrapper.exists(ChildComponent)).toBe(false);
        });

        it('should render Spinner component', () => {
            expect(wrapper.exists(Spinner)).toBe(true);
        });
    });
});