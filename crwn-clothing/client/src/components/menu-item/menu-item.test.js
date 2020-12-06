import React from 'react';
import { shallow } from 'enzyme';

import MenuItem from './menu-item.component';
import { MenuItemContainer, TitleContainer } from './menu-item.styles';

describe('testing MenuItem component', () => {
    const itemName = 'iphone';
    let wrapper;
    let mockMatch;
    let mockHistory;

    beforeEach(() => {
        mockMatch = {
            url: '/shop'
        };

        mockHistory = {
            push: jest.fn()
        };

        const mockProps = {
            title: itemName,
            imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1604021663000',
            linkUrl: itemName,
            history: mockHistory,
            match: mockMatch
        };

        wrapper = shallow(<MenuItem.WrappedComponent {...mockProps} />);
    });

    it('should render a MenuItem component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should go back in history when clicked', () => {
        wrapper.find(MenuItemContainer).simulate('click');
        expect(mockHistory.push).toHaveBeenCalledWith(
            `${mockMatch.url}${itemName}`
        );
    });

    it('should render the title in uppercase', () => {
        expect(wrapper.find(TitleContainer).text()).toEqual(itemName.toUpperCase());
    });
});