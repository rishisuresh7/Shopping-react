import React from 'react';
import './cart-dropdown.styles.scss';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/custom-buttom.component';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/dropdown/dropdown.selectors';
import { createStructuredSelector } from 'reselect';
import { showDropDown } from '../../redux/dropdown/dropdown.actions';

const CartDropDown = ({cartItems, history, dispatch}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
            {
                cartItems.length?
                cartItems.map(item => <CartItem key = {item.id} item = { item }></CartItem>):
                <span className= 'empty-message' >Your Cart is Empty!!!</span>
            }
            </div>
            <CustomButton onClick = { () => {
                history.push('/checkout');
                dispatch(showDropDown())
            }} >GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));