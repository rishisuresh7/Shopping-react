import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {ReactComponent as Logo} from '../../assets/img/reuse.svg';
import { auth } from '../../firebase/firebase.util';
import CartItem from '../cart-component/cart-item.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectShowDropDown } from '../../redux/dropdown/dropdown.selectors';
import { createStructuredSelector } from 'reselect';
import './header-component.styles.scss'

const Header = ({ currentUser, showDropDown}) => {
    return (
        <div className="header">
            <Link className='logo-container' to='/'>
                <Logo className='logo'>
                </Logo>
            </Link>
            <div className="options">
                <Link className='option' to='/shop'>SHOP</Link >
                <Link className='option' to='/contact'>CONTACT</Link>
                {
                    currentUser?
                    <div className='option' onClick={ () => auth.signOut() }>SIGN OUT</div>:
                    <Link className='option' to='/login'>SIGNIN</Link>
                }
                <CartItem ></CartItem>
            </div>
            {
                showDropDown?
                <CartDropDown></CartDropDown>:
                null
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    showDropDown: selectShowDropDown
})

export default connect(mapStateToProps)(Header);