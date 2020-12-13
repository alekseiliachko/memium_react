import { connect } from "react-redux";
import SignupForm from "../components/SignupForm";
import { signupAttempt } from "../redux/auth/actions";

const mapDispatchToProps = (dispatch) => ({
  onSignUp: (userInfo) => dispatch(signupAttempt(userInfo)),
});

export default connect(null, mapDispatchToProps)(SignupForm);
