import { combineReducers } from 'redux';
import userReducer from './user/user-reducer';
import dropDownReducer from './dropdown/dropdown.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const rootReducer = combineReducers({
    user: userReducer,
    cart: dropDownReducer,
    directory: directoryReducer,
    shop: shopReducer
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

export default persistReducer(persistConfig, rootReducer);