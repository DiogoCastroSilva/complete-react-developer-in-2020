import React from 'react';
import { shallow } from 'enzyme';

import CartDropdown from './cart-dropdown.component';
import CartItem from '../cart-item/cart-item.component';

import {
    CartDropdownButtonContainer,
    EmptyMessageContainer
} from './cart-dropdown.styles';


describe('testing CartDropdown component', () => {
    let wrapper;
    let mockHandledClick;
    const cartItems = [
        {
            imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1604021663000',
            price: '1179€',
            name: 'Iphone 12 Pro',
            quantity: 1
        }
    ];

    beforeEach(() => {
        mockHandledClick = jest.fn();
        
        const mockProps = {
            cartItems: cartItems,
            handleClick: mockHandledClick
        };

        wrapper = shallow(<CartDropdown {...mockProps} />);
    });

    it('should render CartDropdown component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should handle click event', () => {
        wrapper.find(CartDropdownButtonContainer).simulate('click');
        expect(mockHandledClick).toHaveBeenCalled();
    });

    it('should render the right number of cart items', () => {
        expect(wrapper.find(CartItem).length).toEqual(cartItems.length);
    });

    it('should render empty message', () => {
        const newMockProps = {
            cartItems: [],
            handleClick: mockHandledClick
        };

        const newWrapper = shallow(<CartDropdown {...newMockProps} />);

        expect(newWrapper.exists(EmptyMessageContainer)).toBe(true);
    });

});

