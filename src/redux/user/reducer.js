import {
  AVATAR_LOADED,
  ATTEMPT_LOAD_AVATAR,
  ATTEMPT_LOAD_DETAILS,
  DETAILS_LOADED,
  SUBS_LOADED,
  ATTEMPT_LOAD_SUBS,
  ATTEMPT_UPDATE_DETAILS,
} from "./actions";

export const LOADING_STATUS = {
  NOT_LOADED: "NOT_LOADED",
  LOADING: "LOADING",
  LOADED: "LOADED",
};

const initialState = {
  avatar: "",
  blackList: [],
  details: {
    bio: "",
    gender: "Another",
    name: "",
  },
  subs: [],
  avatarLoadingStatus: LOADING_STATUS.NOT_LOADED,
  detailsLoadingStatus: LOADING_STATUS.NOT_LOADED,
  subsLoadingStatus: LOADING_STATUS.NOT_LOADED,
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
    case SUBS_LOADED:
      return {
        ...store,
        subs: action.payload,
        subsLoadingStatus: LOADING_STATUS.LOADED,
      };
    case ATTEMPT_LOAD_SUBS:
      return {
        ...store,
        subsLoadingStatus: LOADING_STATUS.LOADING,
      };
    case ATTEMPT_UPDATE_DETAILS:
      return {
        ...store,
        detailsLoadingStatus: LOADING_STATUS.LOADING,
      };
    default:
      return store;
  }
};
