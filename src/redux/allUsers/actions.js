import AccountOpenController from "../../api/AccountOpenController";

export const SET_USER_DATA = "SET_USER_DATA";
export const setUserData = (userId, userData) => ({
  type: SET_USER_DATA,
  userId,
  userData,
});

export const fetchUserData = (userId) => async (dispatch) => {
  const res = await AccountOpenController.getAccountsDetails(userId);
  dispatch(setUserData(userId, res.data));
};

export const SET_USER_AVATAR = "SET_USER_AVATAR";
export const setUserAvatar = (userId, avatar) => ({
  type: SET_USER_AVATAR,
  userId,
  avatar,
});
export const fetchUserAvatar = (userId) => async (dispatch) => {
  const res = await AccountOpenController.getAccountsAvatar(userId);
  dispatch(setUserAvatar(userId, res));
};
