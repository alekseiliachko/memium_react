import { connect } from "react-redux";
import { SignupForm } from "../components/SignupForm";
import { signupAttempt } from "../redux/auth/actions";

const mapDispatchToProps = (dispatch) => ({
  onSignUp: (userInfo) => dispatch(signupAttempt(userInfo)),
});

export const SignupFormContainer = connect(
  null,
  mapDispatchToProps
)(SignupForm);
