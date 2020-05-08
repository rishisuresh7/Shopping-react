import {addItemToCart, clearCartItem, removeCartItem} from './dropdown.util';

const INIT_STATE = {
    showDropDown: false,
    cartItems: []
}

const dropDownReducer = (state = INIT_STATE, action) => {
    switch(action.type) {
        case 'SHOW_DROP_DOWN': return {
            ...state,
            showDropDown: !state.showDropDown
        }
        case 'ADD_CART_ITEM': return {
            ...state,
            cartItems: addItemToCart( state.cartItems, action.payload)
        }
        case 'CLEAR_CART_ITEM': return {
            ...state,
            cartItems: clearCartItem( state.cartItems, action.payload)
        }
        case 'REMOVE_CART_ITEM': return {
            ...state,
            cartItems: removeCartItem( state.cartItems, action.payload)
        }
        default: return state;
    }
}

export default dropDownReducer;
