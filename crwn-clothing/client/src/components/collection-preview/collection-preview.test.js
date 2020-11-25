import React from 'react';
import { shallow } from 'enzyme';

import { CollectionPreview } from './collection-preview.component';
import CollectionItem from '../collection-item/collection-item.component';
import { TitleContainer } from './collection-preview.styles';


describe('testing CollectionPreview component', () => {
    const mockRouteName = 'hats';
    let wrapper;
    let mockMatch;
    let mockHistory;

    beforeEach(() => {
        mockMatch = {
            path: '/shop'
        };

        mockHistory = {
            push: jest.fn()
        };

        const mockProps = {
            title: 'hats',
            items: [],
            history: mockHistory,
            match: mockMatch,
            routeName: mockRouteName
        };

        wrapper = shallow(<CollectionPreview {...mockProps} />);
    });

    it('should render a CollectionPreview component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should go back in history when clicked', () => {
        wrapper.find(TitleContainer).simulate('click');
        expect(mockHistory.push).toHaveBeenCalledWith(
            `${mockMatch.path}/${mockRouteName}`
        );
    });

    it('should render the right number of items', () => {
        const withItemsMockProps = {
            title: 'hats',
            items: [
                {
                    name: 'Brown Brim',
                    price: 25,
                    imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
                    addItem: jest.fn()
                }
            ],
            history: mockHistory,
            match: mockMatch,
            routeName: mockRouteName
        };

        const newWrapper = shallow(<CollectionPreview {...withItemsMockProps} />);

        expect(newWrapper.find(CollectionItem).length).toEqual(withItemsMockProps.items.length);
    });
});