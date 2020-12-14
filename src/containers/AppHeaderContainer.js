import { AppHeader } from "../components/AppHeader";
import { connect } from "react-redux";
import { loadAvatar } from "../redux/user/actions";
import { logout } from "../redux/auth/actions";

const mapStateToProps = (store) => ({
  username: store.authReducer.username,
  avatar: store.userReducer.avatar,
  avatarLoadingStatus: store.userReducer.avatarLoadingStatus,
});

const mapDispatchToProps = (dispatch) => ({
  loadAvatar: () => dispatch(loadAvatar()),
  onLogout: () => dispatch(logout()),
});

export const AppHeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHeader);
