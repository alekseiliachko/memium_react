import { LoginForm } from "../components/LoginForm";
import { connect } from "react-redux";
import { loginAttempt } from "../redux/auth/actions";

const mapStateToProps = (store) => ({
  error: store.authReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  onLogin: (userInfo) => dispatch(loginAttempt(userInfo)),
});

export const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
