import { LOGIN_SUCCESS, LOG_OUT } from "./actions";

const initialState = {
  username: "",
  isAuthPresent: false,
};

export const authReducer = (store = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...store,
        username: action.payload,
        isAuthPresent: true,
      };
    case LOG_OUT:
      return {
        ...store,
        username: "",
        isAuthPresent: false,
      };
    default:
      return store;
  }
};
