import { connect } from "react-redux";
import { ProfileHeader } from "../components/ProfileHeader";
import { loadDetails } from "../redux/user/actions";
import { loadAvatar } from "../redux/user/actions";

const mapStateToProps = (store) => ({
  details: store.userReducer.details,
  avatar: store.userReducer.avatar,
  avatarLoadingStatus: store.userReducer.avatarLoadingStatus,
  detailsLoadingStatus: store.userReducer.detailsLoadingStatus,
});

const mapDispatchToProps = (dispatch) => ({
  loadDetails: () => dispatch(loadDetails()),
  loadAvatar: () => dispatch(loadAvatar()),
});

export const ProfileHeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileHeader);
