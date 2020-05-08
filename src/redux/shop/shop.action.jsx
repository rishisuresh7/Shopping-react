import ActionTypes from './shop.types';

export const fetchShopDataStart = () => {
    return {
        type: ActionTypes.FETCH_SHOP_DATA_START,
    }
}

export const fetchShopDataSuccess = (collection) => {
    return {
        type: ActionTypes.FETCH_SHOP_DATA_SUCCESS,
        payload: collection
    }
}

export const fetchShopDataFailure = (error) => {
    return {
        type: ActionTypes.FETCH_SHOP_DATA_FAILURE,
        payload: error
    }
}
