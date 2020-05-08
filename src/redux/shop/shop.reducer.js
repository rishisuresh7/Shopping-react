import ActionTypes from './shop.types';

const INIT_STATE = {
    collection: null,
    isFetching: false,
    errorMessage: undefined
}

const shopReducer = (state = INIT_STATE , action) => {
    switch (action.type) {
        case ActionTypes.FETCH_SHOP_DATA_START:
            return {
                ...state,
                isFetching: true
            }
        case ActionTypes.FETCH_SHOP_DATA_SUCCESS :
            return {
                ...state,
                isFetching: false,
                collection: action.payload
            };
        case ActionTypes.FETCH_SHOP_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default: return state;
    }
}

export default shopReducer;