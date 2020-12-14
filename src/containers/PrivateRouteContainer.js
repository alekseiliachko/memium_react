import { connect } from "react-redux";
import { PrivateRoute } from "../components/PrivateRoute";

const mapStateToProps = (store) => {
  return {
    authState: store.authReducer.authState,
  };
};

export const PrivateRouteContainer = connect(mapStateToProps)(PrivateRoute);
