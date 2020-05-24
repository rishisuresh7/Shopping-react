import { takeLatest, call, put } from 'redux-saga/effects';
//import axios from  'axios';
import {fetchSectionsSuccess, fetchSectionsFailure} from './directory.actions';
import {convertWithRouteName} from '../../firebase/firebase.util';

export function* fetchSections() {
    try {
        //const response = yield call(axios.get, "http://localhost:4000/shoppingCategories/getcollection")
        const data = [
            {
                "id": 3,
                "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
                "title": "Sneakers"
            },
            {
                "id": 4,
                "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
                "title": "Jackets"
            },
            {
                "id": 5,
                "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
                "title": "Hats"
            },
            {
                "id": 1,
                "imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
                "size": "large",
                "title": "Mens"
            },
            {
                "id": 2,
                "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
                "size": "large",
                "title": "Womens"
            }
        ]
        const sections = yield call(convertWithRouteName, data);
        yield put(fetchSectionsSuccess(sections));
    } catch(error) {
        yield put(fetchSectionsFailure(error))
    }
}

export function* fetchSectionsStart() {
    yield takeLatest('FETCH_SECTIONS_START', fetchSections);
}