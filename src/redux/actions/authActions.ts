import { nanoid } from 'nanoid';
import React from 'react';
import { AuthAction, AuthActionTypes, UserProps } from '../../types';

interface LoginProps {
  email: string;
  password: string;
}
interface SignupProps extends LoginProps {
  firstName: string;
  lastName: string;
}

export const signup =
  ({ email, password, firstName, lastName }: SignupProps) =>
  async (dispatch: React.Dispatch<AuthAction>) => {
    // api.post('/signup')
    // .then(() => {
      dispatch({ type: AuthActionTypes.SIGNUP });
    // })
    // .catch(err => {
      dispatch({ type: AuthActionTypes.AUTH_ERROR, payload: 'err.message'})
    // })
  };

export const login =
  ({ email, password }: LoginProps) =>
  async (dispatch: React.Dispatch<AuthAction>) => {
    // api.post('/login')
    // .then(() => {
      dispatch({ type: AuthActionTypes.LOGIN });
    // })
    // .catch(err => {
      dispatch({ type: AuthActionTypes.AUTH_ERROR, payload: 'err.message'})
    // })
  };

export const logout = () => (dispatch: React.Dispatch<AuthAction>) => {
  dispatch({ type: AuthActionTypes.LOGOUT });
};

export const clearAuthMessage = () => (dispatch: React.Dispatch<AuthAction>) =>
  dispatch({ type: AuthActionTypes.CLEAR_AUTH_MESSAGE });
