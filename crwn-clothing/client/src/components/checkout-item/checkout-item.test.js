import React from 'react';
import { shallow } from 'enzyme';

import CheckoutItem from './checkout-item.component';
import { RemoveButtonContainer, QuantityContainer } from './checkout-item.styles';


describe('Testing CheckoutItem component', () => {
    let wrapper;
    let mockRemoveItem;
    let mockAddItem;
    let mockClearItem;

    beforeEach(() => {
        mockRemoveItem = jest.fn();
        mockAddItem = jest.fn();
        mockClearItem = jest.fn();

        const mockProps = {
            item: {
                imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1604021663000',
                price: '1179€',
                name: 'Iphone 12 Pro',
                quantity: 1
            },
            clearItem: mockClearItem,
            addItem: mockAddItem,
            removeItem: mockRemoveItem
        };

        wrapper = shallow(<CheckoutItem {...mockProps} />);
    });

    it('expects to render the CheckoutItem component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('expects to call the AddItem function', () => {
        wrapper
            .find(QuantityContainer)
            .childAt(2)
            .simulate('click');
        
        expect(mockAddItem).toHaveBeenCalled();
    });

    it('expects to call the RemoveItem function', () => {
        wrapper
            .find(QuantityContainer)
            .childAt(0)
            .simulate('click');

        expect(mockRemoveItem).toHaveBeenCalled();
    });

    it('expects to call the ClearItem function', () => {
        wrapper.find(RemoveButtonContainer).simulate('click');
        expect(mockClearItem).toHaveBeenCalled();
    });
});