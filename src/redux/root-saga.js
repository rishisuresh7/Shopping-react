import { all, call } from 'redux-saga/effects';
import {fetchSectionsStart} from  './directory/directory.sagas';
import {fetchDataStart} from './shop/shop.sagas';

export default function* rootSafa() {
    yield all([
        call(fetchSectionsStart),
        call(fetchDataStart)
    ]);
}