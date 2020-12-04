import React from 'react';
import { shallow } from 'enzyme';

import CollectionsOverview from './collections-overview.component';
import CollectionPreview from '../collection-preview/collection-preview.component';


describe('testing CollectionsOverview component', () => {
    let wrapper;

    beforeEach(() => {
        const mockProps = {
            collections: [
                {
                    id: 1,
                    title: 'hats',
                    items: []
                }
            ]
        };

        wrapper = shallow(<CollectionsOverview {...mockProps} />);
    });

    it('should render a CollectionPreview component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should have one CollectionPreview component', () => {
        expect(wrapper.find(CollectionPreview).length).toEqual(1);
    });

    it('should not have any CollectionPreview component', () => {
        const withItemsMockProps = {
            collections: []
        };

        const newWrapper = shallow(<CollectionsOverview {...withItemsMockProps} />);

        expect(newWrapper.find(CollectionPreview).exists()).toEqual(false);
    });
});