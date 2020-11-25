import React from 'react';
import { shallow } from 'enzyme';

import CartIcon from './cart-icon.component';
import { ItemCountContainer } from './cart-icon.styles';


describe('Testing CartIcon component', () => {
    let wrapper;
    let mockToggleCartHidden;

    beforeEach(() => {
        mockToggleCartHidden = jest.fn();

        const mockProps = {
            toggleCartHidden: mockToggleCartHidden,
            itemsCount: 0
        };

        wrapper = shallow(<CartIcon {...mockProps} />);
    });

    it('expects to render CartIcon component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('expects toogle to be called', () => {
        wrapper.simulate('click');
        expect(mockToggleCartHidden).toHaveBeenCalled();
    });

    it('expects item count to be rendered', () => {
        const itemCounts = parseInt(wrapper.find(ItemCountContainer).text());
        expect(itemCounts).toBe(0);
    })
});