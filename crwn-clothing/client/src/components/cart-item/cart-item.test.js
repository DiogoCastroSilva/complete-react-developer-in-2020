import React from 'react';
import { shallow } from 'enzyme';

import CartItem from './cart-item.component';


describe('Testing CartItem component', () => {
    it('expects to render the CartItem component', () => {
        const mockProps = {
            imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1604021663000',
            price: '1179€',
            name: 'Iphone 12 Pro',
            quantity: 1
        };

        expect(shallow(<CartItem item={mockProps} />)).toMatchSnapshot();
    });
});