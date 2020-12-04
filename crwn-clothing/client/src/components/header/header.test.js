import React from 'react';
import { shallow } from 'enzyme';

import Header from './header.component';
import CartDropdownContainer from '../../containers/cart-dropdown.container';
import { OptionLink } from './header.styles';


describe('Testing Header component', () => {
    let wrapper;
    let handleSignOut;

    beforeEach(() => {
        handleSignOut = jest.fn();

        const mockProps = {
            currentUser: {
                uid: '123'
            },
            hidden: true,
            signOutStart: handleSignOut
        };

        wrapper = shallow(<Header {...mockProps} />);
    });
   
    it('should render Header component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    describe('if currentUser is present', () => {
        it('should render sign out link', () => {
            expect(
                wrapper
                    .find(OptionLink)
                    .at(2)
                    .text()
            ).toBe('SIGN OUT');
        });
    
        it('should call signOutStart method when link is clicked', () => {
            wrapper
                .find(OptionLink)
                .at(2)
                .simulate('click');
    
          expect(handleSignOut).toHaveBeenCalled();
        });
    });

    describe('if currentUser is null', () => {
        it('should render sign in link', () => {
            const mockProps = {
                hidden: true,
                currentUser: null,
                signOutStart: handleSignOut
            };
      
            const newWrapper = shallow(<Header {...mockProps} />);
      
            expect(
                newWrapper
                    .find(OptionLink)
                    .at(2)
                    .text()
            ).toBe('SIGN IN');
        });
    });

    describe('if hidden is true', () => {
        it('should not render CartDropdown', () => {
            expect(wrapper.exists(CartDropdownContainer)).toBe(false);
        });
    });
    
    describe('if currentUser is null', () => {
        it('should render CartDropdown', () => {
            const mockProps = {
                hidden: false,
                currentUser: null,
                signOutStart: handleSignOut
            };
    
            const newWrapper = shallow(<Header {...mockProps} />);
    
            expect(newWrapper.exists(CartDropdownContainer)).toBe(true);
        });
    });
});