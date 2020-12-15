import { connect } from "react-redux";
import { ProfileHeader } from "../components/ProfileHeader";
import {
  loadDetails,
  loadSubs,
  loadAvatar,
  updateDetails,
  updateAvatar,
} from "../redux/user/actions";

const mapStateToProps = (store) => ({
  details: store.userReducer.details,
  avatar: store.userReducer.avatar,
  subs: store.userReducer.subs,
  avatarLoadingStatus: store.userReducer.avatarLoadingStatus,
  detailsLoadingStatus: store.userReducer.detailsLoadingStatus,
  subsLoadingStatus: store.userReducer.subsLoadingStatus,
});

const mapDispatchToProps = (dispatch) => ({
  loadDetails: () => dispatch(loadDetails()),
  loadAvatar: () => dispatch(loadAvatar()),
  loadSubs: () => dispatch(loadSubs()),
  updateDetails: (details) => dispatch(updateDetails(details)),
  updateAvatar: (avatar) => dispatch(updateAvatar(avatar)),
});

export const ProfileHeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileHeader);
