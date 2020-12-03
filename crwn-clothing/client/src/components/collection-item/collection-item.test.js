import React from 'react';
import { shallow } from 'enzyme';

import CollectionItem from './collection-item.component';
import { AddToCartButton } from './collection-item.styles';


describe('Testing CollectionItem component', () => {
    let wrapper;
    let mockAddItem;

    beforeEach(() => {
        mockAddItem = jest.fn();

        const mockProps = {
            item: {
                imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1604021663000',
                price: '1179€',
                name: 'Iphone 12 Pro',
                quantity: 1
            },
            addItem: mockAddItem
        };

        wrapper = shallow(<CollectionItem {...mockProps} />);
    });

    it('expects to render the CollectionItem component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('expects to call the AddItem function', () => {
        wrapper
            .find(AddToCartButton)
            .simulate('click');
        
        expect(mockAddItem).toHaveBeenCalled();
    });
});