import { AVATAR_LOADED, ATTEMPT_LOAD_AVATAR } from "./actions";

export const LOADING_STATUS = {
  NOT_LOADED: "NOT_LOADED",
  LOADING: "LOADING",
  LOADED: "LOADED",
};

const initialState = {
  avatar: "",
  blackList: [],
  details: {},
  avatarLoadingStatus: LOADING_STATUS.NOT_LOADED,
};

export const userReducer = (store = initialState, action) => {
  switch (action.type) {
    case AVATAR_LOADED:
      return {
        ...store,
        avatar: action.payload,
        avatarLoadingStatus: LOADING_STATUS.LOADED,
      };
    case ATTEMPT_LOAD_AVATAR:
      return {
        ...store,
        avatarLoadingStatus: LOADING_STATUS.LOADING,
      };
    default:
      return store;
  }
};
