export const addItemToCart = (cartItems, newItem) => {
    const itemExists = cartItems.find( item => item.id === newItem.id );

    if(itemExists) {
        return cartItems.map(item => {
            return item.id === newItem.id ? {...item, quantity: item.quantity + 1} : item;
        });
    }

    return [...cartItems, {...newItem, quantity: 1}]
}

export const clearCartItem = (cartItems, removedItem) => {
    return cartItems.filter(item => item.id !== removedItem.id)
}

export const removeCartItem = (cartItems, removedItem) => {
    return cartItems.map( item => {
        return item.id === removedItem.id ? {...item, quantity: item.quantity - 1} : item;
    }).filter(item => item.quantity !== 0)
}