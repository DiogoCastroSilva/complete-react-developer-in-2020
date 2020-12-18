import React from 'react';
import { mount } from 'enzyme';

import Shop from './shop.component';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


export const createMockStore = ({ state, reducers }) => {
    const store = createStore(combineReducers(reducers), state);
    return {
      ...store,
      persistor: {
        persist: () => null
      }
    };
};

describe('testing Shop component', () => {
    let wrapper;
    let mockFetchCollectionsStart;
    let store;

    beforeEach(() => {
        const mockReducer = (
            state = {
              isFetching: true
            },
            action
        ) => state;
      
        const mockState = {
            shop: {
              isFetching: true
            }
        };

        mockFetchCollectionsStart = jest.fn();

        store = createMockStore({
            state: mockState,
            reducers: { shop: mockReducer }
        });

        const mockMatch = {
            path: ''
        };

        const mockProps = {
            match: mockMatch,
            fetchCollectionsStart: mockFetchCollectionsStart
        };

        wrapper = mount(
            <BrowserRouter>
              <Provider store={store}>
                <Shop {...mockProps} />
              </Provider>
            </BrowserRouter>
        );
    });

    it('should render a Shop component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call a fetchCollectionStart', () => {
        expect(mockFetchCollectionsStart).toHaveBeenCalled();
    });
});