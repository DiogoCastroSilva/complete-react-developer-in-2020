import React from 'react';
import { connect } from 'react-redux';

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
    OptionDiv
} from './header.styles';

import { ReactComponent as Logo } from '../../assets/icons/crown.svg'
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const Header = ({ currentUser, hidden }) => (
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
                <OptionDiv
                    className='option'
                    onClick={() => auth.signOut()}
                >
                    SIGN OUT
                </OptionDiv> :
                <OptionLink
                    className='option'
                    to='/signin'
                >
                    SIGN IN
                </OptionLink>    
            }
            <CartIcon />
        </OptionsContainer>
        {hidden ?
            null :
            <CartDropdown />
        }
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);