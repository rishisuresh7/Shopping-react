import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { selectCartItems, selectTotalPrice } from '../../redux/dropdown/dropdown.selectors';
import './checkout.styles.scss';
import StripeButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({cartItems, totalPrice}) => {
    debugger;
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(item => <CheckoutItem key = {item.id} item= {item}></CheckoutItem>)
            }
            <div className="total">
                Total: ${totalPrice}
            </div>
            <div className='test-warning'>
                *Please use the following test credit card for payments*
                <br />
                    4242 4242 4242 4242 - 01/20 - 123
            </div>
            <StripeButton price = {totalPrice}></StripeButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectTotalPrice
})

export default connect(mapStateToProps)(CheckoutPage);