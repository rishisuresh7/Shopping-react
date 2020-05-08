export const showDropDown = () => {
    return {
        type: 'SHOW_DROP_DOWN',
    };
}

export const addCartItem = (item) => {
    return {
        type: 'ADD_CART_ITEM',
        payload: item
    };
}

export const clearCartItem = (item) => {
    return {
        type: 'CLEAR_CART_ITEM',
        payload: item
    }
}

export const removeCartItem = (item) => {
    return {
        type: 'REMOVE_CART_ITEM',
        payload: item
    }
}