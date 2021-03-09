import { LOGIN_ATTEMPT, LOGIN_SUCCESS, LOG_OUT } from "./actions";

export const AUTH_STATE = {
  LOGGED_OUT: "LOGGED_OUT",
  SUCCESS: "SUCCESS",
  ATTEMPT: "ATTEMPT",
};

export const initialState = {
  username: "",
  authState: AUTH_STATE.ATTEMPT,
};

export const authReducer = (store = initialState, action) => {
  switch (action.type) {
    case LOGIN_ATTEMPT:
      return {
        ...store,
        authState: AUTH_STATE.ATTEMPT,
      };
    case LOGIN_SUCCESS:
      return {
        ...store,
        username: action.payload,
        authState: AUTH_STATE.SUCCESS,
      };
    case LOG_OUT:
      return {
        ...store,
        username: "",
        authState: AUTH_STATE.LOGGED_OUT,
      };
    default:
      return store;
  }
};
