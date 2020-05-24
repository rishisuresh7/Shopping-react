import {takeLatest, call, put} from 'redux-saga/effects';
import ActionTypes from './shop.types';
import {removeIdFromResponse} from '../../firebase/firebase.util';
import {fetchShopDataSuccess, fetchShopDataFailure} from './shop.action';
import {data} from './shop.data';

export function* fetchDataAsync() {
    try {
        //const response = yield fetch("http://localhost:4000/shoppingItems/getcategories");
        //const dataJson  = yield response.json()
        //const data = yield dataJson.result
        const finalData = yield call(removeIdFromResponse, data);;
        //call - used to yield if it takes to much time
        yield put(fetchShopDataSuccess(finalData)); //put - used to dispatch an action
    } catch (error) {
        yield put(fetchShopDataFailure(error.message));
    }
}

export function* fetchDataStart() {
    yield takeLatest(
        ActionTypes.FETCH_SHOP_DATA_START,
        fetchDataAsync
    );
}