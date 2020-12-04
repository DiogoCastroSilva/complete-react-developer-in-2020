import React from 'react';
import { shallow } from 'enzyme';

import Directory from './directory.component';
import MenuItem from '../menu-item/menu-item.component';

describe('testing Directory component', () => {
    let wrapper;

    beforeEach(() => {
        const mockProps = {
            sections: [
                {
                    title: 'Page',
                    imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
                    linkUrl: 'Page'
                }
            ]
        };

        wrapper = shallow(<Directory {...mockProps} />);
    });

    it('should render a Directory component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should have one MenuItem component', () => {
        expect(wrapper.find(MenuItem).length).toEqual(1);
    });

    it('should not have any MenuItem component', () => {
        const withItemsMockProps = {
            sections: []
        };

        const newWrapper = shallow(<Directory {...withItemsMockProps} />);

        expect(newWrapper.find(MenuItem).exists()).toEqual(false);
    });
});