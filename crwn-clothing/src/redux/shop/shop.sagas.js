import { takeLatest, call, put } from 'redux-saga/effects';

import ShopActionTypes from './shop.types';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionSuccess, fetchCollectionError } from './shop.actions';



export function* fecthCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionMap = yield call(convertCollectionSnapshotToMap, snapshot);
        yield put(fetchCollectionSuccess(collectionMap));
    } catch (error) {
        yield put(fetchCollectionError(error.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTION_START, fecthCollectionsAsync);
}