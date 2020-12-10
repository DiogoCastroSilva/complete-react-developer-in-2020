import React from 'react';
import { shallow } from 'enzyme';

import Collection from './collection.component';
import CollectionItemContainer from '../../containers/collection-item.container';


describe('testing Collection component', () => {
    describe('Collection without items', () => {
        let wrapper;

        beforeEach(() => {
            const mockProps = {
                collection: {
                    id: 1,
                    title: 'hats',
                    items: []
                }
            };
    
            wrapper = shallow(<Collection {...mockProps} />);
        });
    
        it('should render a Collection component', () => {
            expect(wrapper).toMatchSnapshot();
        });
    
        it('should render 0 items', () => {
            expect(wrapper.find(CollectionItemContainer).exists()).toBe(false);
        });
    });
    

    it('should render 2 item', () => {
        const mockProps = {
            collection: {
                title: 'hats',
                items: [
                    {
                        id: 1,
                        imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1604021663000',
                        price: '1179€',
                        name: 'Iphone 12 Pro'    
                    },
                    {
                        id: 2,
                        imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1604021663000',
                        price: '179€',
                        name: 'SSD driver'
                    }
                ]
            }
        };

        const wrapper = shallow(<Collection {...mockProps} />);
        expect(wrapper.find(CollectionItemContainer).exists()).toBe(true);
        expect(wrapper.find(CollectionItemContainer).length).toBe(mockProps.collection.items.length);
    });
});