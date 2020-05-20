import { takeLatest, call, put } from 'redux-saga/effects';
import axios from  'axios';
import {fetchSectionsSuccess, fetchSectionsFailure} from './directory.actions';
import {convertWithRouteName} from '../../firebase/firebase.util';

export function* fetchSections() {
    try {
        const response = yield call(axios.get, "http://localhost:4000/shoppingCategories/getcollection")
        const sections = yield call(convertWithRouteName,response.data.result.sections);
        yield put(fetchSectionsSuccess(sections));
    } catch(error) {
        yield put(fetchSectionsFailure(error))
    }
}

export function* fetchSectionsStart() {
    yield takeLatest('FETCH_SECTIONS_START', fetchSections);
}