import ShopActionTypes from './shop.types';
// import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';


export const fetchCollectionsStart = () => {
    return {
        type: ShopActionTypes.FETCH_COLLECTION_START,
    };
};

export const fetchCollectionSuccess = collectionMap => {
    return {
        type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
        payload: collectionMap
    };
};

export const fetchCollectionError = errorMesssage => {
    return {
        type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
        payload: errorMesssage
    };
};


// export const fetchCollectionsStartAsync = () => {
//     return dispatch => {
//         const collectionRef = firestore.collection('collections');
//         dispatch(fetchCollectionsStart());

//         collectionRef.get().then(snapshot => {
//             const collectionMap = convertCollectionSnapshotToMap(snapshot);
//             dispatch(fetchCollectionSuccess(collectionMap));
//         }).catch(error => {
//             dispatch(fetchCollectionError(error.message));
//         });
//     };
// };