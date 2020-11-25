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
import CartItemContainer from '../../containers/cart-item.container';
import CartDropdownContainer from '../../containers/cart-dropdown.container';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { signOutStart } from '../../redux/user/user.actions';


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
                <OptionDiv
                    className='option'
                    onClick={signOutStart}
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
            <CartItemContainer />
        </OptionsContainer>
        {hidden ?
            null :
            <CartDropdownContainer />
        }
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);