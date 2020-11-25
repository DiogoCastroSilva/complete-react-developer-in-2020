import React from 'react';
import { shallow } from 'enzyme';

import FormInput from './form-input.component';


describe('Testing FormInput component', () => {
    let wrapper;
    let mockHandleChange

    beforeEach(() => {
        mockHandleChange = jest.fn();

        const mockProps = {
            label: 'email',
            name: 'email',
            handleChange: mockHandleChange
        };

        wrapper = shallow(<FormInput {...mockProps} />);
    });

    it('expects to render the FormInput Component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call handleChanges when input changes', () => {
        wrapper.find('.form-input').simulate('change');

        expect(mockHandleChange).toHaveBeenCalled();
    });

    it('Should not render a label if not passed as prop', () => {
        const mockPropsWithNoLabel = {
            name: 'email',
            handleChange: mockHandleChange
        };

        const noLabelWrapper = shallow(<FormInput {...mockPropsWithNoLabel} />);
        
        expect(noLabelWrapper.exists('.form-input-label')).toBe(false);
    })
});