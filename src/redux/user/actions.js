import AccountsController from "../../api/AccountsController";

export const AVATAR_LOADED = "AVATAR_LOADED";
export const ATTEMPT_LOAD_AVATAR = "ATTEMPT_LOAD_AVATAR";

export const setLoadedAvatar = (src) => ({
  payload: src,
  type: AVATAR_LOADED,
});

export const avatarLoadingAttempt = () => ({
  type: ATTEMPT_LOAD_AVATAR,
});

export const loadAvatar = () => async (dispatch) => {
  dispatch(avatarLoadingAttempt());
  const res = await AccountsController.getAvatarImage();
  dispatch(setLoadedAvatar(res.data));
};
