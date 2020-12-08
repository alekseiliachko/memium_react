import { LOGIN_SUCCESS, LOG_OUT } from "./actions";

const initialState = {
  username: "",
};

export const authReducer = (store = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...store,
        username: action.payload,
      };
    case LOG_OUT:
      localStorage.removeItem("memium_token");
      return {
        ...store,
        username: "",
      };
    default:
      return store;
  }
};
