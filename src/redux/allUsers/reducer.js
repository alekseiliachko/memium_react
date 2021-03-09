import { SET_USER_AVATAR, SET_USER_DATA } from "./actions";

export const initialState = {
  userDataById: {},
};

export const allUsersReducer = (store = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...store,
        userDataById: {
          ...store.userDataById,
          [action.userId]: {
            ...store.userDataById[action.userId],
            ...action.userData,
          },
        },
      };
    case SET_USER_AVATAR:
      return {
        ...store,
        userDataById: {
          ...store.userDataById,
          [action.userId]: {
            ...store.userDataById[action.userId],
            avatar: action.avatar,
          },
        },
      };
    default:
      return store;
  }
};
