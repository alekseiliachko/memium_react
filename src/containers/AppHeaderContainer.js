import { AppHeader } from "../components/AppHeader";
import { connect } from "react-redux";
import { logout } from "../redux/auth/actions";

const mapStateToProps = (store) => ({
  username: store.authReducer.username,
});

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(logout()),
});

export const AppHeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHeader);
