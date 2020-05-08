import React from 'react';
import './checkout-item.styles.scss';
import {connect} from 'react-redux';
import {clearCartItem, removeCartItem, addCartItem} from '../../redux/dropdown/dropdown.actions';

const CheckoutItem = ({item, clearCartItem, addCartItem, removeCartItem}) => {
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={item.imageUrl} alt='item' />
            </div>
            <span className="name">{item.name}</span>
            <span className="quantity">
                <div className = 'arrow' onClick = {() => removeCartItem(item)}>&#10094; </div>
                <span className= 'value'>{item.quantity}</span>
                <div className = 'arrow' onClick = {() => addCartItem(item)}> &#10095;</div>
            </span>
            <span className="price">{item.price}</span>
            <div className="remove-button" onClick={() => clearCartItem(item)}>
                 &#10005;
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        clearCartItem: (item) => dispatch(clearCartItem(item)),
        addCartItem: (item) => dispatch(addCartItem(item)),
        removeCartItem: (item) => dispatch(removeCartItem(item))
    }
}

export default connect(null, mapDispatchToProps)(CheckoutItem);