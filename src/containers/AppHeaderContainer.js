import AppHeader from "../components/AppHeader";
import { connect } from "react-redux";

const mapStateToProps = (store) => ({
  username: store.authReducer.username,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
