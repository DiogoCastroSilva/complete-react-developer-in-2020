import React from 'react';

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink
} from './header.styles';

import { ReactComponent as Logo } from '../../assets/icons/crown.svg'
import CartItemContainer from '../../containers/cart-item.container';
import CartDropdownContainer from '../../containers/cart-dropdown.container';


const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink
                className='option'
                to='/shop'
            >
                SHOP
            </OptionLink>
            <OptionLink
                className='option'
                to='/contact'
            >
                CONTACT
            </OptionLink>
            {currentUser ? 
                <OptionLink
                    as='div'
                    className='option'
                    onClick={signOutStart}
                >
                    SIGN OUT
                </OptionLink> :
                <OptionLink
                    className='option'
                    to='/signin'
                >
                    SIGN IN
                </OptionLink>    
            }
            <CartItemContainer />
        </OptionsContainer>
        {hidden ?
            null :
            <CartDropdownContainer />
        }
    </HeaderContainer>
);

export default Header;