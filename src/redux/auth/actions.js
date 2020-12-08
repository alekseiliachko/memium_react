import AuthController from "../../api/AuthController";

export const LOGIN_ATTEMPT = "LOGIN_ATTEMPT";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOG_OUT = "LOG_OUT";

export const SIGNUP_ATTEMPT = "SIGNUP_ATTEMPT";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";

export const AUTH_FAILURE = "AUTH_FAILURE";

export const loginSuccess = (username) => ({
  type: LOGIN_SUCCESS,
  payload: username,
});

export const logout = () => ({
  type: LOG_OUT,
});

export const authFailure = (err) => ({
  type: AUTH_FAILURE,
  payload: err,
});

export const signupSuccess = () => ({
  type: SIGNUP_SUCCESS,
});

export const loginAttempt = (userInfo) => async (dispatch) => {
  const res = await AuthController.login(userInfo);
  AuthController.updateAuthHeader(res.data.token);
  dispatch(loginSuccess(res.data.username));
};

export const signupAttempt = (userInfo) => async (dispatch) => {
  const res = AuthController.signup(userInfo);
  dispatch(signupSuccess());
};
