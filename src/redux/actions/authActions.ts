import { nanoid } from 'nanoid';
import React from 'react';
import convertToDate from '../../utils/convertToDate';
import firebase from '../../firebase';
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
    const firestore = firebase.firestore();

    try {
      const res = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      if (res.user) {
        const user: UserProps = {
          id: res.user.uid,
          email,
          firstName,
          lastName,
          createdAt: new Date(),
        };
        await firestore.collection('users').doc(res.user.uid).set(user);
        dispatch({ type: AuthActionTypes.SIGNUP });
      }
    } catch (err) {
      console.log('error:', err);
      dispatch({ type: AuthActionTypes.AUTH_ERROR, payload: err.message });
    }
  };

export const login =
  ({ email, password }: LoginProps) =>
  async (dispatch: React.Dispatch<AuthAction>) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => dispatch({ type: AuthActionTypes.LOGIN }))
      .catch((err) => {
        console.log('login error:', err);
        dispatch({ type: AuthActionTypes.AUTH_ERROR, payload: err.message });
      });
  };

export const logout = () => (dispatch: React.Dispatch<AuthAction>) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch({ type: AuthActionTypes.LOGOUT });
    })
    .catch((err) =>
      dispatch({ type: AuthActionTypes.AUTH_ERROR, payload: err })
    );
};

export const sendPasswordResetEmail =
  (email: string) => async (dispatch: React.Dispatch<AuthAction>) => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() =>
        dispatch({
          type: AuthActionTypes.SEND_EMAIL,
          payload: 'Password reset email sent.',
        })
      )
      .catch((err) => {
        console.log('password reset err:', err);
        dispatch({
          type: AuthActionTypes.AUTH_ERROR,
          payload: 'Error sending password reset email',
        });
      });
  };

export const clearAuthMessage = () => (dispatch: React.Dispatch<AuthAction>) =>
  dispatch({ type: AuthActionTypes.CLEAR_AUTH_MESSAGE });
