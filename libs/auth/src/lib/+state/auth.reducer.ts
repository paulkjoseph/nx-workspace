import { AuthActions, AuthActionTypes } from './auth.actions';
import { User } from '@nx-workspace/data-models';

/**
 * Interface for the 'Auth' data used in
 *  - AuthState, and
 *  - authReducer
 */
export interface AuthData {
  loading: boolean;
  user: User;
  error: Error;
}

/**
 * Interface to the part of the Store containing AuthState
 * and other information related to AuthData.
 */
export interface AuthState {
  readonly auth: AuthData;
}

export const initialState: AuthData = {
  loading: false,
  user: null,
  error: null
};

export function authReducer(
  state = initialState,
  action: AuthActions
): AuthData {
  switch (action.type) {
    case AuthActionTypes.Login: {
      const loading = true;
      return { ...state, loading };
    }

    case AuthActionTypes.LoginSuccess: {
      const loading = false;
      const user = action.payload;
      return { ...state, loading, user };
    }

    case AuthActionTypes.LoginFail: {
      const loading = false;
      const user = null;
      const error = action.payload;
      return { ...state, loading, user, error };
    }

    default:
      return state;
  }
}
