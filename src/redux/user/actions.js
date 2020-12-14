import AccountsController from "../../api/AccountsController";

export const AVATAR_LOADED = "AVATAR_LOADED";
export const ATTEMPT_LOAD_AVATAR = "ATTEMPT_LOAD_AVATAR";
export const ATTEMPT_LOAD_DETAILS = "ATTEMPT_LOAD_DETAILS";
export const DETAILS_LOADED = "DETAILS_LOADED";

export const setLoadedAvatar = (src) => ({
  payload: src,
  type: AVATAR_LOADED,
});

export const setLoadedDetails = (details) => ({
  type: DETAILS_LOADED,
  payload: details,
});

export const avatarLoadingAttempt = () => ({
  type: ATTEMPT_LOAD_AVATAR,
});

export const detailsLoadingAttempt = () => ({
  type: ATTEMPT_LOAD_DETAILS,
});

export const loadAvatar = () => async (dispatch) => {
  dispatch(avatarLoadingAttempt());
  const res = await AccountsController.getAvatarImage();
  dispatch(setLoadedAvatar(res.data));
};

export const loadDetails = () => async (dispatch) => {
  dispatch(detailsLoadingAttempt());
  const details = await AccountsController.getUserDetails();
  dispatch(setLoadedDetails(details.data));
};
