import React from 'react';
import {connect} from 'react-redux';
import { ReactComponent as ShoppingCart} from '../../assets/img/shopping-bag.svg'
import './cart-item.styles.scss'
import { showDropDown } from '../../redux/dropdown/dropdown.actions'
import { selectCartItemsCount } from '../../redux/dropdown/dropdown.selectors';
import { createStructuredSelector } from 'reselect';

const CartItem = ({showDropDown, itemCount}) => {
    return (
        <div className="cart" onClick = { showDropDown }>
            <ShoppingCart className='cart-icon'/>
            <span className='cart-count'>{ itemCount }</span>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

const mapDispatchToProps = disptach => ({
    showDropDown: () => { disptach(showDropDown())}
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);