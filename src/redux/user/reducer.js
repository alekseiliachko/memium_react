import {
  AVATAR_LOADED,
  ATTEMPT_LOAD_AVATAR,
  ATTEMPT_LOAD_DETAILS,
  DETAILS_LOADED,
} from "./actions";

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
  detailsLoadingStatus: LOADING_STATUS.NOT_LOADED,
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
    case DETAILS_LOADED:
      return {
        ...store,
        details: action.payload,
        detailsLoadingStatus: LOADING_STATUS.LOADED,
      };
    case ATTEMPT_LOAD_DETAILS:
      return {
        ...store,
        detailsLoadingStatus: LOADING_STATUS.LOADING,
      };
    default:
      return store;
  }
};
