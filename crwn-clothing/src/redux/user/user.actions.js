import UserActionTypes from "./user.types";


// Google Sign In
export const googleSignInStart = () => {
    return {
        type: UserActionTypes.GOOGLE_SIGN_IN_START
    };
}

// Email Sign In
export const emailSignInStart = emailAndPassword => {
    return {
        type: UserActionTypes.EMAIL_SIGN_IN_START,
        payload: emailAndPassword
    };
}

export const signInSuccess = user => {
    return {
        type: UserActionTypes.SIGN_IN_SUCCESS,
        payload: user
    };
}

export const signInFailure = error => {
    return {
        type: UserActionTypes.SIGN_IN_FAILURE,
        payload: error
    };
}
