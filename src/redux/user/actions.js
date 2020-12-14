import AccountsController from "../../api/AccountsController";

export const AVATAR_LOADED = "AVATAR_LOADED";
export const ATTEMPT_LOAD_AVATAR = "ATTEMPT_LOAD_AVATAR";
export const ATTEMPT_LOAD_DETAILS = "ATTEMPT_LOAD_DETAILS";
export const DETAILS_LOADED = "DETAILS_LOADED";
export const ATTEMPT_LOAD_SUBS = "ATTEMPT_LOAD_SUBS";
export const SUBS_LOADED = "SUBS_LOADED";

export const ATTEMPT_UPDATE_DETAILS = "ATTEMPT_UPDATE_DETAILS";

export const setLoadedAvatar = (src) => ({
  payload: src,
  type: AVATAR_LOADED,
});

export const setLoadedDetails = (details) => ({
  type: DETAILS_LOADED,
  payload: details,
});

export const setLoadedSubs = (subs) => ({
  type: SUBS_LOADED,
  payload: subs,
});

export const avatarLoadingAttempt = () => ({
  type: ATTEMPT_LOAD_AVATAR,
});

export const detailsLoadingAttempt = () => ({
  type: ATTEMPT_LOAD_DETAILS,
});

export const subsLoadingAttempt = () => ({
  type: ATTEMPT_LOAD_SUBS,
});

export const detailsUpdateAttempt = () => ({
  type: ATTEMPT_UPDATE_DETAILS,
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

export const loadSubs = () => async (dispatch) => {
  dispatch(subsLoadingAttempt());
  const subs = await AccountsController.getSubscribersList();
  dispatch(setLoadedSubs(subs.data));
};

export const updateDetails = (details) => async (dispatch) => {
  dispatch(detailsUpdateAttempt());
  const updatedDetails = await AccountsController.updateDetails(details);
  dispatch(setLoadedDetails(updatedDetails.data));
};
