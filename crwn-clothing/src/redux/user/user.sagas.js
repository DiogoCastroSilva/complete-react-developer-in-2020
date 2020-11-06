import { all, call, put, takeLatest } from "redux-saga/effects";
import UserActionTypes from "./user.types";

import { auth, createUserProfileDocument, getCurrentUser, googleProvider } from '../../firebase/firebase.utils';
import {
    signInSuccess,
    signInFailure,
    signOutSuccess,
    signOutFailure
} from "./user.actions";


function* getSnapshotFromAuthUser(user) {
    try {
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data()
        }));
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromAuthUser(user);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromAuthUser(user);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* isUserAuthenticathed() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromAuthUser(userAuth);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

export function* signOutStart() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error));
    }
}


export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOutStart);
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticathed);
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart)
    ]);
}