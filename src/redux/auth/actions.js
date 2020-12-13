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

export const logout = () => async (dispatch) => {
  localStorage.removeItem("memium_token");
  localStorage.removeItem("name");
  return {
    type: LOG_OUT,
  };
};

export const authFailure = (err) => ({
  type: AUTH_FAILURE,
  payload: err,
});

export const signupSuccess = () => ({
  type: SIGNUP_SUCCESS,
});

export const restoreSessionAttempt = () => (dispatch) => {
  if (localStorage.memium_token) {
    AuthController.updateAuthHeader(localStorage.memium_token);
    dispatch(loginSuccess(localStorage.name));
  }
};

export const loginAttempt = (userInfo) => async (dispatch) => {
  const res = await AuthController.login(userInfo);
  AuthController.updateAuthHeader(res.data.token);
  localStorage.setItem("name", res.data.username);
  dispatch(loginSuccess(res.data.username));
};

export const signupAttempt = (userInfo) => async (dispatch) => {
  const res = AuthController.signup(userInfo);
  dispatch(signupSuccess());
};
