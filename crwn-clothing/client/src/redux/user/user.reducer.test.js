import UserActionTypes from './user.types';
import UserReducer from './user.reducer';

describe('User reducer', () => {
    it('should return initial state', () => {
        expect(UserReducer(undefined, {}))
            .toEqual({
                currentUser: null,
                error: null
            });
    });

    it('should SignIn successfully', () => {
        const mockUser = {
            name: 'user'
        };

        expect(UserReducer(undefined, {
            type: UserActionTypes.SIGN_IN_SUCCESS,
            payload: mockUser
        })).toEqual({
            error: null,
            currentUser: mockUser
        });
    });

    it('should SignOut Successfully and set the current user to null', () => {
        expect(UserReducer(undefined, {
            type: UserActionTypes.SIGN_OUT_SUCCESS
        }).currentUser).toBe(null);
    });

    it('should set error message when SignIn, SignOut, SignUp failure', () => {
        const mockError = {
            message: 'An error occoured',
            code: 404
        };

        expect(UserReducer(undefined, {
            type: UserActionTypes.SIGN_IN_FAILURE,
            payload: mockError
        }).error).toBe(mockError);

        expect(UserReducer(undefined, {
            type: UserActionTypes.SIGN_OUT_FAILURE,
            payload: mockError
        }).error).toBe(mockError);

        expect(UserReducer(undefined, {
            type: UserActionTypes.SIGN_UP_FAILURE,
            payload: mockError
        }).error).toBe(mockError);
    });
});