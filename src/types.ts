export interface UserProps {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
}

export enum AuthActionTypes {
  SIGNUP = 'SIGNUP',
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  SEND_EMAIL = 'SEND_EMAIL',
  AUTH_ERROR = 'AUTH_ERROR',
  CLEAR_AUTH_MESSAGE = 'CLEAR_AUTH_MESSAGE',
}

/**
 *
 * AUTH REDUCER INTERFACES
 *
 */
interface SignupAction {
  type: typeof AuthActionTypes.SIGNUP;
}
interface LoginAction {
  type: typeof AuthActionTypes.LOGIN;
}
interface LogoutAction {
  type: typeof AuthActionTypes.LOGOUT;
}
interface SendEmailAction {
  type: typeof AuthActionTypes.SEND_EMAIL;
  payload: string;
}
interface AuthErrorAction {
  type: typeof AuthActionTypes.AUTH_ERROR;
  payload: string;
}
interface ClearAuthMessageAction {
  type: typeof AuthActionTypes.CLEAR_AUTH_MESSAGE;
}

export type AuthAction =
  | SignupAction
  | LoginAction
  | LogoutAction
  | SendEmailAction
  | AuthErrorAction
  | ClearAuthMessageAction;