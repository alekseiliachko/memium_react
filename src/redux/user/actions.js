import AccountsController from "../../api/AccountsController";

export const AVATAR_LOADED = "AVATAR_LOADED";
export const ATTEMPT_LOAD_AVATAR = "ATTEMPT_LOAD_AVATAR";
export const ATTEMPT_LOAD_DETAILS = "ATTEMPT_LOAD_DETAILS";
export const DETAILS_LOADED = "DETAILS_LOADED";
export const ATTEMPT_LOAD_SUBS = "ATTEMPT_LOAD_SUBS";
export const SUBS_LOADED = "SUBS_LOADED";
export const ATTEMPT_LOAD_BL = "ATTEMPT_LOAD_BL";
export const BL_LOADED = "BL_LOADED";
export const ATTEMPT_LOAD_LIKED = "ATTEMPT_LOAD_LIKED";
export const LIKED_LOADED = "LIKED_LOADED";

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

export const setLoadedBl = (bl) => ({
  type: BL_LOADED,
  payload: bl,
});

export const setLoadedLikedList = (likedPosts) => ({
  type: LIKED_LOADED,
  payload: likedPosts,
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

export const blLoadingAttempt = () => ({
  type: ATTEMPT_LOAD_BL,
});

export const likedLoadingAttempt = () => ({
  type: ATTEMPT_LOAD_LIKED,
});

export const loadAvatar = () => async (dispatch) => {
  dispatch(avatarLoadingAttempt());
  const res = await AccountsController.getAvatarImage();
  const src = URL.createObjectURL(res.data);
  dispatch(setLoadedAvatar(src));
};

export const updateAvatar = (avatar) => async (dispatch) => {
  dispatch(avatarLoadingAttempt());
  const updatedAvatar = await AccountsController.updateAvatar(avatar);
  const src = URL.createObjectURL(updatedAvatar.data);
  dispatch(setLoadedAvatar(src));
};

export const loadDetails = () => async (dispatch) => {
  dispatch(detailsLoadingAttempt());
  const details = await AccountsController.getUserDetails();
  const fetchedDetails = Object.entries(details.data).map(([key, value]) => {
    if (value == null) {
      return [key, ""];
    }
    return [key, value];
  });
  dispatch(setLoadedDetails(Object.fromEntries(fetchedDetails)));
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

export const loadBl = () => async (dispatch) => {
  dispatch(blLoadingAttempt());
  const bl = await AccountsController.getBlUsers();
  dispatch(setLoadedBl(bl.data));
};

export const deleteFromBl = (userId) => async (dispatch) => {
  const bl = await AccountsController.deleteUserFromBl(userId);
  dispatch(loadBl());
};

export const loadLikedList = () => async (dispatch) => {
  dispatch(likedLoadingAttempt());
  const likedList = await AccountsController.getLikedPosts();
  dispatch(setLoadedLikedList(likedList.data));
};

export const deleteFromLiked = (articleId) => async (dispatch) => {
  const unlikeStatus = await AccountsController.deleteLikeFromPost(articleId);
  dispatch(loadLikedList());
};
