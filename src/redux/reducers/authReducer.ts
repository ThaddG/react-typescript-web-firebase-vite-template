import { AuthAction, AuthActionTypes } from '../../types';

// interfaces / types
interface InitialStateInterface {
  authMessage: string;
}

const initialState: InitialStateInterface = {
  authMessage: '',
};

export const authReducer = (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case 'LOGIN':
      console.log('login successful');
      return { ...state, authMessage: '' };
    case 'SIGNUP':
      console.log('signup successful');
      return { ...state, authMessage: '' };
    case 'AUTH_ERROR':
      return { ...state, authMessage: action.payload };
    case 'LOGOUT':
      console.log('logout successful');
      return { ...state, authMessage: '' };
    case 'CLEAR_AUTH_MESSAGE':
      return { ...state, authMessage: '' };
    default:
      return { ...state };
  }
};
