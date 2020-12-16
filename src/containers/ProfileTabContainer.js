import { connect } from "react-redux";
import { ProfileTab } from "../components/ProfileTab";
import {
  loadDetails,
  loadSubs,
  loadAvatar,
  updateDetails,
  updateAvatar,
} from "../redux/user/actions";

const mapStateToProps = (store) => ({});

const mapDispatchToProps = (dispatch) => ({});

export const ProfileTabContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileHeader);
