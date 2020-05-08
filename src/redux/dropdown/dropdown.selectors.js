import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumulator, item) => { return accumulator + item.quantity }, 0)
);

export const selectShowDropDown = createSelector(
    [selectCart],
    (cart) => cart.showDropDown
)

export const selectTotalPrice = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumulator, item) => {return accumulator + (item.quantity * item.price)}, 0)
);